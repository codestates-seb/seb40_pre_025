package preproject.stack.post.dto;

import lombok.Getter;
import lombok.Setter;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.user.dto.UserResponseDto;

@Getter @Setter
public class PostUserResponseDto {

    private MultiResponseDto posts;
    private UserResponseDto userResponseDto;
}
