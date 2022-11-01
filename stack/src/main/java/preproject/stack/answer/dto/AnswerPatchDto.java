package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class AnswerPatchDto {

    private long answerId;
    private String body;
    private Integer voteCount;
    private Integer readCount;


}