package preproject.stack.answer.entity;

import preproject.stack.tag.entity.Tag;

import javax.persistence.*;

@Entity
public class AnswerTag {

    @Id @GeneratedValue
    private Long answerTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Answer answer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;
}