package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {

    private long answerId;
    private String body;
    private Integer voteCount;
    private Integer readCount;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}