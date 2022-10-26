package preproject.stack.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import preproject.stack.tag.entity.Tag;


public interface TagRepository extends JpaRepository<Tag,Long> {
}
