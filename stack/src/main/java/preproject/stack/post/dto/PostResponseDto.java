package preproject.stack.post.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class PostResponseDto {

    private Long postId;

    private String title;

    private String body;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;


}
