package preproject.stack.member.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface MemberCrudRepository extends JpaRepository<Member, Integer> {
}
