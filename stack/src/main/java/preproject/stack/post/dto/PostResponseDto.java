package preproject.stack.post.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;

public class PostResponseDto {

    private Long postId;

    private String title;

    private String body;


    private LocalDateTime createdAt;


}
