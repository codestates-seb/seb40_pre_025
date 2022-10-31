package preproject.stack.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import preproject.stack.post.entity.Post;
import preproject.stack.tag.entity.Tag;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post,Long> {


}
