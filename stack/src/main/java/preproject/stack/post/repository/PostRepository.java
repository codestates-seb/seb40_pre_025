package preproject.stack.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import preproject.stack.post.entity.Post;

public interface PostRepository extends JpaRepository<Post,Long> {
}
