package preproject.stack.answer.entity;

import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.time.LocalDateTime;
import java.util.Date;

@Embeddable
public class Address {

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdDate = LocalDateTime.now();

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime modiefiedAt = LocalDateTime.now();

    private int voteCount;

    private int readCount;
}
