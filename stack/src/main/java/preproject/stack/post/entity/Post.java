package preproject.stack.post.entity;

import preproject.stack.answers.entity.Answers;
import preproject.stack.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Post {

    @Id @GeneratedValue
    private Long postId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<Answers> answers = new ArrayList<>();

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<PostTag> postTags = new ArrayList<>();

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<PostSaved> postSaveds = new ArrayList<>();

    private Long Pictures;

    @Embedded
    private Address address;
}
