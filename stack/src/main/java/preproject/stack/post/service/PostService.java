package preproject.stack.post.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.stack.exception.BusinessLogicException;
import preproject.stack.exception.ExceptionCode;
import preproject.stack.post.entity.Post;
import preproject.stack.post.repository.PostRepository;
import preproject.stack.user.entity.User;
import preproject.stack.user.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public Post createPost(Post post,long userId) {
        User findUser = userRepository.findByUserId(userId);
        post.setUser(findUser);

        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
        Post findPost = findVerifiedPost(post.getPostId());

        Optional.ofNullable(post.getTitle())
                .ifPresent(title -> findPost.setTitle(title));
        Optional.ofNullable(post.getBody())
                .ifPresent(body -> findPost.setBody(body));

        return postRepository.save(findPost);
    }

    // 찾는 게시글이 없는 경우 오류 발생
    public Post findPost(long postId) {
        Post findPost = findVerifiedPost(postId);
        return findPost;
    }
    public Page<Post> findUserPosts(long userId,int page, int size){
        return postRepository.findByUser(userId,PageRequest.of(page,size,Sort.by("postId").descending()));

    }

    public Page<Post> findPosts(int page, int size) {
        return postRepository.findAll(PageRequest.of(page, size,
                Sort.by("postId").descending()));
    }

    public void deletePost(long postId) {
        Post findPost = findVerifiedPost(postId);
        postRepository.delete(findPost);
    }

    public Post findVerifiedPost(long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post post = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return post;
    }



}
