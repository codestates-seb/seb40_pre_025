package preproject.stack.post.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stack.post.dto.PostPatchDto;
import preproject.stack.post.dto.PostPostDto;
import preproject.stack.post.entity.Post;
import preproject.stack.post.mapper.PostMapper;
import preproject.stack.post.service.PostService;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/post")
@Validated
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    private final PostMapper mapper;

    @PostMapping
    public ResponseEntity postPost(@Valid @RequestBody PostPostDto postPostDto){
        Post post = mapper.postPostDtoToPost(postPostDto);
        Post response = postService.createPost(post);
        return new ResponseEntity<>(mapper.postToResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{post-id}")
    public ResponseEntity patchPost(@PathVariable("post-id") long postId , @Valid @RequestBody PostPatchDto postPatchDto){
        postPatchDto.setPostId(postId);
        Post post = mapper.postPatchDtoToPost(postPatchDto);
        Post response = postService.updatePost(post);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.postToResponseDto(response)),HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity getPost( @RequestParam int page,
                                   @RequestParam int size){
        Page<Post> pagePosts = postService.findPosts(page - 1, size);
        List<Post> posts = pagePosts.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.postsToPostResponseDto(posts),pagePosts),HttpStatus.OK
        );
    }

    @GetMapping("/{post-id}")
    public ResponseEntity getPost(@PathVariable("post-id") long postId){
        Post post = postService.findPost(postId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.postToResponseDto(post)),HttpStatus.OK);
    }

    @DeleteMapping("/{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id") long postId){
        postService.deletePost(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
