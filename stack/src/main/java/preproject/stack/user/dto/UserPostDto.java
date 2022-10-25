package preproject.stack.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {

    @NotBlank
    @Email
    @UniqueElements
    private String email;

    @NotBlank
    private String name;


    @NotBlank
    private String password;
}
