package preproject.stack.post.service;

<<<<<<< HEAD
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

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public Post createPost(Post post){
        return postRepository.save(post);
    }

    public Post updatePost(Post post){
        Post findPost = findVerifiedQuestion(post.getPostId());

        Optional.ofNullable(findPost.getCreateAt()) //업데이트 날짜 수정
                .ifPresent(createAt->findPost.setCreateAt(createAt));
        Optional.ofNullable(post.getTitle())
                .ifPresent(title ->findPost.setTitle(title));
        Optional.ofNullable(post.getBody())
                .ifPresent(body -> findPost.setBody(body));

        return postRepository.save(findPost);
    }

    // 찾는 게시글이 없는 경우 오류 발생
    public Post findPost(long postId){

        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(() -> new RuntimeException(ExceptionCode.MEMBER_NOT_FOUND.getMessage()));
        return findPost;
    }

    public Page<Post> findPosts(int page , int size){
        return postRepository.findAll(PageRequest.of(page,size, Sort.by("postId").descending()));
    }

    public void deletePost(long postId){
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post post = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        postRepository.delete(post);
    }

    public Post findVerifiedQuestion(long postId){
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post post = optionalPost.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return post;
    }

=======
public class PostService {
>>>>>>> kjm
}
