package preproject.stack.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import preproject.stack.answer.entity.Answer;
import preproject.stack.post.entity.Post;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findById(Long answerId);

    Page<Answer> findByPost_PostId(long postId, Pageable pageable);

    @Query("select a from Answer a where a.user.userId = :userId")
    Page<Answer> findByUser(@Param("userId") long userId, Pageable pageable);
}