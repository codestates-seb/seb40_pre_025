package preproject.stack.post.entity;

import preproject.stack.saved.entity.Saved;
import preproject.stack.tag.entity.Tag;

import javax.persistence.*;

@Entity
public class PostSaved {

    @Id
    @GeneratedValue
    private Long posSavedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "saved_id")
    private Saved saved;
}
