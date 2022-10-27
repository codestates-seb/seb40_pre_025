package preproject.stack.tag.entity;

<<<<<<< HEAD
import preproject.stack.post.entity.PostTag;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tag {

    @Id @GeneratedValue
    private Long tagId;

    @OneToMany(mappedBy = "tag")
    private List<PostTag> postTags = new ArrayList<>();

    private String tagName;

=======
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tag {
    @Id
    private int tagId;
    private String name;
>>>>>>> kjm
}
