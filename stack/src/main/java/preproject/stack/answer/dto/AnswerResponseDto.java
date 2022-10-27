package preproject.stack.answer.dto;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class AnswerResponseDto {

    private Integer answerId;

    private String body;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;


}
