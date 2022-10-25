package preproject.stack.saved.entity;

import preproject.stack.post.entity.Post;
import preproject.stack.post.entity.PostSaved;
import preproject.stack.post.entity.PostTag;
import preproject.stack.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Saved {

    @Id @GeneratedValue
    private Long savedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "saved",cascade = CascadeType.ALL)
    private List<PostSaved> postSaveds = new ArrayList<>();
}
