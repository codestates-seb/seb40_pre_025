package preproject.stack.answer.mapper;

import org.mapstruct.Mapper;
import preproject.stack.answer.dto.AnswerPatchDto;
import preproject.stack.answer.dto.AnswerPostDto;
import preproject.stack.answer.dto.AnswerResponseDto;
import preproject.stack.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<AnswerResponseDto> answerToAnswersResponseDto(List<Answer> Answers);
}
