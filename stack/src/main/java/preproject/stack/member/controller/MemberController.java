package preproject.stack.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import preproject.stack.member.entity.Member;
import preproject.stack.member.entity.MemberCrudRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class MemberController {

    @Autowired
    MemberCrudRepository repository;

    @GetMapping("member")
    private List<Member> getMembers() {
        // 전체 회원 조회
        List<Member> members= (List<Member>) repository.findAll();
        return members;
    }

    @GetMapping("/member/{memberId}")
    private Optional<Member> getMember(@PathVariable Integer memberId) {
        // 회원 조회
        Optional<Member> member = repository.findById(memberId);
        System.out.println("-----------find done-----------");
        return member;
    }

    @PostMapping("member")
    public void addMember(@RequestBody Member member) {
        // 회원 추가
        repository.save(member);
        System.out.println("-----------add done-----------");;
    }

    @PatchMapping("/member/{memberId}")
    private Member updateMember(@PathVariable Integer memberId, @RequestBody Member member) {
        // 회원 정보 수정
        repository.save(member);
        System.out.println("-----------update done-----------");;
        return member;
    }

}