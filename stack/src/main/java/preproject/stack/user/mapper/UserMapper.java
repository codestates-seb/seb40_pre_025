package preproject.stack.user.mapper;

import org.mapstruct.Mapper;
import preproject.stack.user.dto.UserPatchDto;
import preproject.stack.user.dto.UserPostDto;
import preproject.stack.user.dto.UserResponseDto;
import preproject.stack.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtoToUser(UserPatchDto userPatchDto);
    UserResponseDto userToUserResponseDto(User user);
    List<UserResponseDto> usersToUserResponseDto(List<User> users);

}
