package preproject.stack.post.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import preproject.stack.tag.entity.Tag;

import javax.persistence.*;

@Entity
@Getter @Setter
@NoArgsConstructor
public class PostTag {

    @Id @GeneratedValue
    private Long postTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public boolean match(String tagName){
        return this.tag.getTagName().equals(tagName);
    }
}
