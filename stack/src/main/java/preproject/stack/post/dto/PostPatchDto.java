package preproject.stack.post.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;

@Getter @Setter
public class PostPatchDto {

    private Long postId;

    private String title;

    private String body;


}
