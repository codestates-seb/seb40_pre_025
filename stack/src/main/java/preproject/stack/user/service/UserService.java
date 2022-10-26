package preproject.stack.user.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import preproject.stack.user.entity.User;
import preproject.stack.user.repository.UserRepository;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;


    //회원가입로직
    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());
        return userRepository.save(user);
    }


    //유저 정보수정로직(이메일은 고유값으로 변경x, 비밀번호나 이름 변경 가능)
    public User updateUser(User user) {
        User findUser = findVerifiedUser(user.getUserId());

        return userRepository.save(findUser);
    }

    //유저 조회 기능 로직
    public User findUser(long userId) {
        return findVerifiedUser(userId);
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

    private User findVerifiedUser(long userId) {
        Optional<User> optionalUser =
                userRepository.findById(userId);
        //유저정보가 디비에 없으면 예외발생
        return null;
    }

    //email은 고유값이기 때문에 이미 가입된 이메일인지 먼저 확인후 회원가입가능하게 만듬
    private void verifyExistsEmail(String email) {

    }
}