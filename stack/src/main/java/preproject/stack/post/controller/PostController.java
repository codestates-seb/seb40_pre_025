package preproject.stack.post.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stack.answer.dto.AnswerPageDto;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.mapper.AnswerMapper;
import preproject.stack.answer.service.AnswerService;
import preproject.stack.post.dto.PostAnswerResponseDto;
import preproject.stack.post.dto.PostPatchDto;
import preproject.stack.post.dto.PostPostDto;
import preproject.stack.post.dto.PostUserResponseDto;
import preproject.stack.post.entity.Post;
import preproject.stack.post.mapper.PostMapper;
import preproject.stack.post.service.PostService;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.response.SingleResponseDto;
import preproject.stack.user.entity.User;
import preproject.stack.user.mapper.UserMapper;
import preproject.stack.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/post")
@Validated
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;
    private final UserService userService;
    private final AnswerService answerService;

    private final UserMapper userMapper;
    private final AnswerMapper answerMapper;
    private final PostMapper mapper;

    // 질문 등록
    @PostMapping("/{user-id}")
    public ResponseEntity postPost(@PathVariable("user-id") long userId,
            @Valid @RequestBody PostPostDto postPostDto){
        Post post = mapper.postPostDtoToPost(postPostDto);

        Post response = postService.createPost(post,userId);

        return new ResponseEntity<>(mapper.postToResponseDto(response), HttpStatus.CREATED);
    }

    // 질문 수정
    @PatchMapping("/{post-id}")
    public ResponseEntity patchPost(@PathVariable("post-id") long postId , @Valid @RequestBody PostPatchDto postPatchDto){
        postPatchDto.setPostId(postId);
        Post post = mapper.postPatchDtoToPost(postPatchDto);
        Post response = postService.updatePost(post);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.postToResponseDto(response)), HttpStatus.OK);

    }
    //질문 하나와 달린 답변 노출, user-id 값은 불필요?
    @GetMapping("/{post-id}")
    public ResponseEntity getPost(@PathVariable("post-id") long postId,
                                      @RequestParam int page,
                                      @RequestParam int size){
        Post post = postService.findPost(postId);
        PostAnswerResponseDto postAnswerResponseDto = new PostAnswerResponseDto();
        postAnswerResponseDto.setPostId(postId);
        postAnswerResponseDto.setTitle(post.getTitle());
        postAnswerResponseDto.setBody(post.getBody());
        postAnswerResponseDto.setCreatedAt(post.getCreatedAt());
        postAnswerResponseDto.setModifiedAt(post.getModifiedAt());
        User user = post.getUser();
     // UseResponseDto 연결
        postAnswerResponseDto.setUserResponseDto(userMapper.userToUserResponseDto(user));

        Page<Answer> answers = answerService.findAnswers(postId, page - 1, size);
        List<Answer> content = answers.getContent();
        postAnswerResponseDto.setAnswers(new MultiResponseDto<>(answerMapper.answersToAnswerResponseDto(content),answers));

        return new ResponseEntity<>(new SingleResponseDto<>(postAnswerResponseDto), HttpStatus.OK);
    }

// 전체 질문 목록
    @GetMapping
    public ResponseEntity getPost( @RequestParam int page,
                                   @RequestParam int size){
        Page<Post> pagePosts = postService.findPosts(page - 1, size);
        List<Post> posts = pagePosts.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.postsToPostResponseDto(posts),pagePosts), HttpStatus.OK
        );
    }
// 답변 없이 질문 내용 한개만 조회는 불필요, 질문+답변으로 대체
/*    @GetMapping("/{post-id}")
    public ResponseEntity getOnePost(@PathVariable("post-id") long postId){
        Post post = postService.findPost(postId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.postToResponseDto(post)),HttpStatus.OK);
    }*/

    @DeleteMapping("/{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id") long postId){
        postService.deletePost(postId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user/{user-id}")
    public ResponseEntity getUserPost(@PathVariable("user-id") long userId,
                                      @RequestParam int page,
                                      @RequestParam int size){
        Page<Post> userPosts = postService.findUserPosts(userId, page - 1, size);
        List<Post> content = userPosts.getContent();


        PostUserResponseDto postUserResponseDto = new PostUserResponseDto();
        postUserResponseDto.setPosts(new MultiResponseDto<>(mapper.postsToPostResponseDto(content),userPosts));

        User user = userService.findUser(userId);
        postUserResponseDto.setUserResponseDto(userMapper.userToUserResponseDto(user));

        return new ResponseEntity<>(new SingleResponseDto<>(postUserResponseDto), HttpStatus.OK);
    }

}
