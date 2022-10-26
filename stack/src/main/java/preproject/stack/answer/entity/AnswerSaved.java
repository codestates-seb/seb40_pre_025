package preproject.stack.answer.entity;

import preproject.stack.post.entity.Post;
import preproject.stack.saved.entity.Saved;

import javax.persistence.*;

@Entity
public class AnswerSaved {

    @Id
    @GeneratedValue
    private Long ansSavedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Answer answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "saved_id")
    private Saved saved;
}
