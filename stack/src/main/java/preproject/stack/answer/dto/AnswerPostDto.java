package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerPostDto {

    @NotBlank
    private String body;

    private Long voteCount;
    private Long readCount;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;


}