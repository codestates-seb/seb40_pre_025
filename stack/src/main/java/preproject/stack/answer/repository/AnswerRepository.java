package preproject.stack.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.stack.answer.entity.Answer;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findById(Long answerId);
}