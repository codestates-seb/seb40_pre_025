package preproject.stack.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stack.answers.entity.Answers;
import preproject.stack.post.entity.Post;
//import preproject.stack.saved.entity.Saved;

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

   // @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    //private List<Saved> saveds = new ArrayList<>();


    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Answers> answers = new ArrayList<>();

    private String userName;

    private String email;

    @Getter
    public enum UserStatus {
        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면 상태");

        private String status;

        UserStatus(String status) {
            this.status = status;
        }

    }


    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
}

