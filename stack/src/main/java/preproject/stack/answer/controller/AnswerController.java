package preproject.stack.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stack.answer.dto.*;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.mapper.AnswerMapper;
import preproject.stack.answer.service.AnswerService;
import preproject.stack.post.entity.Post;
import preproject.stack.post.service.PostService;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.response.SingleResponseDto;
import preproject.stack.user.dto.UserResponseDto;
import preproject.stack.user.entity.User;
import preproject.stack.user.mapper.UserMapper;
import preproject.stack.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@Validated
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    private final UserService userService;
    private final PostService postService;
    private final AnswerMapper mapper;
    private final UserMapper userMapper;



    // 답변 등록
    @PostMapping("/answer/{user-id}/{post-id}")
    public ResponseEntity postAnswer(@PathVariable("post-id") long postId,
                                     @PathVariable("user-id") long userId,
                                     @Valid @RequestBody AnswerPostDto answerPostDto) {

        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        Answer response = answerService.createAnswer(userId,postId,answer);
        AnswerResponseDto answerResponseDto = mapper.answerToAnswerResponseDto(response);
        User user = userService.findUser(userId);
        UserResponseDto userResponseDto = userMapper.userToUserResponseDto(user);
        answerResponseDto.setUserResponseDto(userResponseDto);

        return new ResponseEntity<>(new SingleResponseDto<>(answerResponseDto), HttpStatus.CREATED);

    }

    // 답변 수정
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity updateAnswer(
            @PathVariable("answer-id") @Positive long answerId,
            @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);

        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    // 답변 한 개 조회
    @GetMapping("/answer/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive Long answerId) {

        AnswerUserResponseDto answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(answer),HttpStatus.OK);
    }
    // 자기가 작성한 답변 전체 조회
    @GetMapping("/answer/user/{user-id}")
    public ResponseEntity getUserPost(@PathVariable("user-id") long userId,
                                      @RequestParam int page,
                                      @RequestParam int size){
        Page<Answer> answers = answerService.findUserAnswers(userId, page - 1, size);
        List<Answer> content = answers.getContent();

        AnswerPageDto answerPageDto = new AnswerPageDto();
        answerPageDto.setAnswers(new MultiResponseDto<>(mapper.answersToAnswerResponseDto(content),answers));

        User user = userService.findUser(userId);
        answerPageDto.setUserResponseDto(userMapper.userToUserResponseDto(user));

        return new ResponseEntity<>(new SingleResponseDto<>(answerPageDto), HttpStatus.OK);
    }

    // 특정 포스트에 대한 답변만 조회, 불필요한듯?
    @GetMapping("/answer/{post-id}/answer")
    public ResponseEntity getAnswers(@PathVariable("post-id") long postId,
            @RequestParam Integer page, @RequestParam Integer size ) {

        Page<Answer> answers = answerService.findAnswers(postId, page - 1, size);
        List<Answer> response = answers.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(response,answers), HttpStatus.OK);
    }

    // 답변 삭제

    @DeleteMapping("/answer/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive Long answerId) {

        answerService.deleteAnswer(answerId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}