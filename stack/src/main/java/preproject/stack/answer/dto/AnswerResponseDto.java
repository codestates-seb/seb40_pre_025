package preproject.stack.answer.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class AnswerResponseDto {

    private Long answerId;

    private String title;

    private String body;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;


}
