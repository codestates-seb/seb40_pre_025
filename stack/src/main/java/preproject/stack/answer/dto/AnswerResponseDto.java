package preproject.stack.answer.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import preproject.stack.user.entity.User;

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

}