package preproject.stack.answer.controller;

import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
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
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answer")
@Validated
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    // 답변 등록

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerDto) {

        Answer answer = mapper.answerPostDtoToAnswer(answerDto);
        Answer reponse = answerService.createAnswer(answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(reponse), HttpStatus.CREATED);
    }

    // 답변 수정

    @PatchMapping("/{answer-id}")
    public ResponseEntity updateAnswer(
            @PathVariable("answer-id") @Positive long answerId,
            @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);

        Answer reponse = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(reponse), HttpStatus.OK);
    }

    // 답변 한 개 조회

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive Integer answerId) {

        Optional<Answer> response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),HttpStatus.OK);
    }

    // 답변 여러 개 조회

    @GetMapping
    public ResponseEntity getAnswers() {

        List<Answer> answers = (List<Answer>) answerService.findAnswers(1,10);

        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    // 답변 삭제

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive Integer answerId) {

        answerService.deleteAnswer(answerId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
