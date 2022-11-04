package preproject.stack.post.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import preproject.stack.user.entity.User;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;
@Getter @Setter
public class PostResponseDto {

    private Long postId;

    private String title;

    private String body;

    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;



}
