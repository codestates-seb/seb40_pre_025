package preproject.stack.user.dto;

import lombok.Getter;
import lombok.Setter;
import preproject.stack.user.entity.User;

@Getter
@Setter
public class UserResponseDto {
    private long userId;

    private String email;

    private String userName;

    private User.UserStatus userStatus;

    public String getUserStatus() {
        return userStatus.getStatus();
    }


}

