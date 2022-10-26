package preproject.stack.post.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
        Post findPost = findVerifiedUser(post.getPostId());
        return postRepository.save(findPost);
    }

    public Post findPost(Post post){
        return findVerifiedUser(post.getPostId());
    }

    public Page<Post> findPosts(int page , int size){
        return postRepository.findAll(PageRequest.of(page,size, Sort.by("postId").descending()));
    }

    private Post findVerifiedUser(Long postId) {
        Optional<Post> findPost = postRepository.findById(postId);

        return null;
    }

}
