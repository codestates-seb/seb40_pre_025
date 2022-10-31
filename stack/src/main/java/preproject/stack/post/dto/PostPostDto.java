package preproject.stack.post.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter @Setter
public class PostPostDto {

    private Long tagId;

    private String tagName;

    @NotBlank
    private String title;

    @NotBlank
    private String body;


}
