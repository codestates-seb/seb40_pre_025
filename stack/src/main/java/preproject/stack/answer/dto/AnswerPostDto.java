package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.NotBlank;

@Getter @Setter
public class AnswerPostDto {

    private Integer answerId;

    private String body;
}
