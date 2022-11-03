package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class AnswerUserResponseDto {

    private String userName;
    private Long answerId;
    private String body;
    private Long voteCount;
    private Long readCount;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
