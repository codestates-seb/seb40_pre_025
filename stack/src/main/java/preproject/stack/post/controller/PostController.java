package preproject.stack.post.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import preproject.stack.post.entity.Post;
import preproject.stack.post.entity.PostCrudRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class PostController {

    @Autowired
    PostCrudRepository repository;

    @GetMapping("post")
    private List<Post> getPosts() {
        // 전체 글 조회
        List<Post> postList = (List<Post>) repository.findAll();
        return postList;
    }

    @GetMapping("/post/{postId}")
    private Optional<Post> getPost(@PathVariable Integer postId) {
        // 글 한개 조회
        Optional<Post> post = repository.findById(postId);
        System.out.println("-----------find done-----------");
        return post;
    }

    @PostMapping("post")
    public void addPost(@RequestBody Post post) {
        // 글 추가
        repository.save(post);
        System.out.println("-----------add done-----------");;
    }

    @PatchMapping("/post/{postId}")
    private Post updatePost(@PathVariable Integer postId, @RequestBody Post post) {
        // 글 수정
        repository.save(post);
        System.out.println("-----------update done-----------");;
        return post;
    }
}
