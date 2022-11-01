package preproject.stack.answer.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.stack.answer.dto.AnswerPatchDto;
import preproject.stack.answer.dto.AnswerPostDto;
import preproject.stack.answer.dto.AnswerResponseDto;
import preproject.stack.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T00:33:20+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setCreatedAt( answerPostDto.getCreatedAt() );
        answer.setModifiedAt( answerPostDto.getModifiedAt() );
        answer.setBody( answerPostDto.getBody() );
        answer.setVoteCount( answerPostDto.getVoteCount() );
        answer.setReadCount( answerPostDto.getReadCount() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDto.getAnswerId() );
        answer.setBody( answerPatchDto.getBody() );
        if ( answerPatchDto.getVoteCount() != null ) {
            answer.setVoteCount( answerPatchDto.getVoteCount().longValue() );
        }
        if ( answerPatchDto.getReadCount() != null ) {
            answer.setReadCount( answerPatchDto.getReadCount().longValue() );
        }

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId( answer.getAnswerId() );
        answerResponseDto.setBody( answer.getBody() );
        if ( answer.getVoteCount() != null ) {
            answerResponseDto.setVoteCount( answer.getVoteCount().intValue() );
        }
        if ( answer.getReadCount() != null ) {
            answerResponseDto.setReadCount( answer.getReadCount().intValue() );
        }
        answerResponseDto.setCreatedAt( answer.getCreatedAt() );
        answerResponseDto.setModifiedAt( answer.getModifiedAt() );

        return answerResponseDto;
    }

    @Override
    public List<AnswerResponseDto> answersToAnswerResponseDto(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }
}
