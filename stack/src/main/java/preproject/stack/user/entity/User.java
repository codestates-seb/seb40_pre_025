package preproject.stack.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.format.annotation.DateTimeFormat;
import preproject.stack.answer.entity.Answer;
import preproject.stack.audit.TimestampedUser;
import preproject.stack.post.entity.Post;



import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends TimestampedUser {

    @Id @GeneratedValue
    private Long userId;

    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @Column(length = 100)
    private String password;

    private String about;
    private String userName;
    private String email;


    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();



    public User(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
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

