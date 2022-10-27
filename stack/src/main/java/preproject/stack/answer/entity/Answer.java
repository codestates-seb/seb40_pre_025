package preproject.stack.answer.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import preproject.stack.audit.Timestamped;
import preproject.stack.post.entity.Post;
import preproject.stack.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer extends Timestamped {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    private String body;

    @ColumnDefault("0")
    private Long voteCount;

    @ColumnDefault("0")
    private Long readCount;

}