package preproject.stack.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.header.Header;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.response.SingleResponseDto;
import preproject.stack.user.dto.UserPatchDto;
import preproject.stack.user.dto.UserPostDto;
import preproject.stack.user.entity.User;
import preproject.stack.user.mapper.UserMapper;
import preproject.stack.user.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.lang.reflect.Member;
import java.util.List;

@RestController
@RequestMapping("/user")
@Validated
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    //회원가입 핸들러
    @PostMapping
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = mapper.userPostDtoToUser(userPostDto);
        User response = userService.createUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(response)), HttpStatus.CREATED);
    }
    //회원정보 수정 핸들러
    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") long userId, @Valid @RequestBody UserPatchDto userPatchDto) {
        userPatchDto.setUserId(userId);
        User user = mapper.userPatchDtoToUser(userPatchDto);
        User response = userService.updateUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(response)), HttpStatus.OK);
    }
    //전체회원 조회 핸들러 // 이해를 아직 못함 이부분이랑 response패키지는 jpa파트에서 좀 배껴옴
    @GetMapping
    public ResponseEntity getUsers(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<User> pageUsers = userService.findUsers(page-1, size);
        List<User> users = pageUsers.getContent();
        //서비스 구현
     return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.usersToUserResponseDto(users), pageUsers), HttpStatus.OK);

    }
    //특정회원 조회 핸들러
    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") long userId) {
        User user = userService.findUser(userId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    //회원 삭제? 탈퇴?
    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") long userId) {
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}

