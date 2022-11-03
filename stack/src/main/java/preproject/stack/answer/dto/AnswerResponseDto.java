package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;
import preproject.stack.user.dto.UserResponseDto;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;
    private String body;
    private Integer voteCount;
    private Integer readCount;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private UserResponseDto userResponseDto;

}