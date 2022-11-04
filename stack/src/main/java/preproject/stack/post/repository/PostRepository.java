package preproject.stack.post.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import preproject.stack.post.entity.Post;
import preproject.stack.tag.entity.Tag;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post,Long> {



    @Query("select p from Post p where p.user.userId = :userId")
    Page<Post> findByUser(@Param("userId") long userId,Pageable pageable);


    Post findByPostId(long postId);


}
