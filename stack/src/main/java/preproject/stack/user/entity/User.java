package preproject.stack.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stack.answer.entity.Answer;
import preproject.stack.post.entity.Post;
import preproject.stack.saved.entity.Saved;

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

    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answers> answers = new ArrayList<>();

    private String userName;
    private String email;



    @Enumerated(EnumType.STRING)
    private UserRole role;

    public User(String userName, String email) {
        this.userName = userName;
        this.email = email;
    }
    public enum UserStatus {
        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면 상태");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
        }


}

