package preproject.stack.tag.entity;

import preproject.stack.post.entity.PostTag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tag {

    @Id @GeneratedValue
    private Long tagId;

    @OneToMany(mappedBy = "tag",cascade = CascadeType.ALL)
    private List<PostTag> postTags = new ArrayList<>();

    private String tagName;

}
