package preproject.stack.tag.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tag {
    @Id
    private int tagId;
    private String name;
}
