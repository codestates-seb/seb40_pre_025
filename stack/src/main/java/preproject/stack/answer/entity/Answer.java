package preproject.stack.answer.entity;

import lombok.Getter;
import lombok.Setter;
import preproject.stack.post.entity.Post;
import preproject.stack.user.entity.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Answer {

    @Id @GeneratedValue
    private Integer answerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    private String content;

    @Embedded
    private Address address;

}
