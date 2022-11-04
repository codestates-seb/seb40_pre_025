package preproject.stack.user.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.stack.user.dto.UserPatchDto;
import preproject.stack.user.dto.UserPostDto;
import preproject.stack.user.dto.UserResponseDto;
import preproject.stack.user.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-03T17:37:16+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserPostDto userPostDto) {
        if ( userPostDto == null ) {
            return null;
        }

        User user = new User();

        user.setCreatedAt( userPostDto.getCreatedAt() );
        user.setModifiedAt( userPostDto.getModifiedAt() );
        user.setPassword( userPostDto.getPassword() );
        user.setAbout( userPostDto.getAbout() );
        user.setUserName( userPostDto.getUserName() );
        user.setEmail( userPostDto.getEmail() );

        return user;
    }

    @Override
    public User userPatchDtoToUser(UserPatchDto userPatchDto) {
        if ( userPatchDto == null ) {
            return null;
        }

        User user = new User();

        user.setCreatedAt( userPatchDto.getCreatedAt() );
        user.setModifiedAt( userPatchDto.getModifiedAt() );
        user.setUserId( userPatchDto.getUserId() );
        user.setAbout( userPatchDto.getAbout() );
        user.setUserName( userPatchDto.getUserName() );
        user.setEmail( userPatchDto.getEmail() );

        return user;
    }

    @Override
    public UserResponseDto userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        if ( user.getUserId() != null ) {
            userResponseDto.setUserId( user.getUserId() );
        }
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setUserName( user.getUserName() );
        userResponseDto.setAbout( user.getAbout() );
        userResponseDto.setCreatedAt( user.getCreatedAt() );
        userResponseDto.setModifiedAt( user.getModifiedAt() );

        return userResponseDto;
    }

    @Override
    public List<UserResponseDto> usersToUserResponseDto(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( users.size() );
        for ( User user : users ) {
            list.add( userToUserResponseDto( user ) );
        }

        return list;
    }
}
