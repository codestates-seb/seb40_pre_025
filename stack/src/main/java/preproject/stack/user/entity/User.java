package preproject.stack.user.entity;

import preproject.stack.answers.entity.Answers;
import preproject.stack.post.entity.Post;
import preproject.stack.saved.entity.Saved;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id @GeneratedValue
    private Long userId;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Saved> saveds = new ArrayList<>();


    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Answers> answers = new ArrayList<>();

    private String userName;

    private String email;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Enumerated(EnumType.STRING)
    private UserRole role;


}