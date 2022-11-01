package preproject.stack.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import preproject.stack.user.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
        //findbyemail? 어떵 정보로 유저를 찾을것인가
    User findByUserId(long userId);

    User findByUserName(String username);
}
