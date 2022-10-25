package preproject.stack.post.entity;

import lombok.*;

import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Getter
@Setter
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String body;

    private Integer vote_count;
    private Integer read_count;

    private Integer attached_list;
    private Integer answer_list_id;
    private Integer tag_list_id;
}
