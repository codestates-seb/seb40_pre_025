package preproject.stack.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stack.answer.dto.AnswerPatchDto;
import preproject.stack.answer.dto.AnswerPostDto;
import preproject.stack.answer.dto.AnswerResponseDto;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.mapper.AnswerMapper;
import preproject.stack.answer.service.AnswerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 등록
    @PostMapping("answer")
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) {

        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);

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

        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    // 답변 여러 개 조회
    @GetMapping("/answer")
    public ResponseEntity getAnswers(@RequestParam Integer page, @RequestParam Integer size ) {

        List<Answer> answers = answerService.findAnswers(page,size);

        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    // 답변 삭제

    @DeleteMapping("/answer/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive Long answerId) {

        answerService.deleteAnswer(answerId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}