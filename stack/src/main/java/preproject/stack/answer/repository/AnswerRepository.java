package preproject.stack.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.stack.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer,Integer> {
}
