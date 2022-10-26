package preproject.stack.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stack.answers.entity.Answers;
import preproject.stack.post.entity.Post;
import preproject.stack.saved.entity.Saved;
import preproject.stack.user.entity.UserRole;
import preproject.stack.user.entity.UserStatus;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}

