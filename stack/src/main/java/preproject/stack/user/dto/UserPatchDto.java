package preproject.stack.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Getter
@Setter
public class UserPatchDto {

    private long userId;
    @NotBlank
    private String email;
    @NotBlank
    private String userName;

    private String about;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public void setUserId(long userId){
        this.userId = userId;
    }
}

