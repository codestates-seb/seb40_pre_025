package preproject.stack.answers.entity;

import preproject.stack.post.entity.Address;
import preproject.stack.post.entity.Post;
import preproject.stack.user.entity.User;

import javax.persistence.*;

@Entity
public class Answers {

    @Id @GeneratedValue
    private Long answersId;

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
