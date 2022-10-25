package preproject.stack.post.entity;

import preproject.stack.tag.entity.Tag;

import javax.persistence.*;

@Entity
public class PostTag {

    @Id @GeneratedValue
    private Long postTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;
}
