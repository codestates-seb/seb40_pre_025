package preproject.stack.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserPatchDto {

    private long userId;
    @NotBlank
    private String email;
    @NotBlank
    private String userName;

    public void setUserId(long userId){
        this.userId = userId;
    }
}

