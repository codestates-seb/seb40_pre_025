package preproject.stack.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import preproject.stack.answer.entity.Answer;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.user.dto.UserResponseDto;
import preproject.stack.user.entity.User;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter @Setter
public class PostAnswerResponseDto {

    private Long postId;

    private String title;

    private String body;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    private MultiResponseDto answers;
    private UserResponseDto userResponseDto;


}
