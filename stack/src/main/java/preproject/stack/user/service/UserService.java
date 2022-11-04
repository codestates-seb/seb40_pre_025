package preproject.stack.user.service;


import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import preproject.stack.auth.CustomAuthorityUtils;
import preproject.stack.exception.BusinessLogicException;
import preproject.stack.exception.ExceptionCode;
import preproject.stack.user.entity.User;
import preproject.stack.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    //회원가입로직
    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());
        //패스워드 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        //db에 유저role 저장
        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);
        return userRepository.save(user);
    }


    //유저 정보수정로직(이메일은 고유값으로 변경x, 비밀번호나 이름 변경 가능)
    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getUserName())
                .ifPresent(userName -> findUser.setUserName(userName));
        Optional.ofNullable(user.getAbout())
                .ifPresent(about -> findUser.setAbout(about));
        return userRepository.save(findUser);
    }

    //유저 조회 기능 로직
    public User findUser(long userId) {
        return findVerifiedUser(userId);

    }

    public User findUserName(String username){
        return userRepository.findByUserName(username);
    }

    //전체 유저 조회 기능
    public Page<User> findUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page,size, Sort.by("userId").descending()));
    }

    //유저 삭제?탈퇴? 기능
    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }

    // 로그인 할떄 중복회원 검사
    private User findVerifiedUser(long userId) {
        Optional<User> optionalUser =
                userRepository.findById(userId);
        //유저정보가 디비에 없으면 예외발생
        User findUser = optionalUser.orElseThrow(()-> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;

    }

    //email은 고유값이기 때문에 이미 가입된 이메일인지 먼저 확인후 회원가입가능하게 만듬
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXIST);
    }
}

