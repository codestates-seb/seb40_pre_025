package preproject.stack.answer.mapper;

import org.mapstruct.Mapper;
import preproject.stack.answer.dto.AnswerPatchDto;
import preproject.stack.answer.dto.AnswerPostDto;
import preproject.stack.answer.dto.AnswerResponseDto;
import preproject.stack.answer.entity.Answer;
import preproject.stack.post.dto.PostResponseDto;
import preproject.stack.post.entity.Post;
import preproject.stack.post.service.PostService;
import preproject.stack.user.service.UserService;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
    List<AnswerResponseDto> answersToAnswerResponseDto(List<Answer> answers);
}