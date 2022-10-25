package preproject.stack.answer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.repository.AnswerCrudRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class AnswerController {

    @Autowired
    AnswerCrudRepository repository;

    @GetMapping("answer")
    private List<Answer> getAnswers() {
        // 전체 답변 조회
        List<Answer> answerList = (List<Answer>) repository.findAll();
        return answerList;
    }

    @GetMapping("/answer/{answerId}")
    private Optional<Answer> getAnswer(@PathVariable Integer answerId) {
        // 답변 한개 조회
        Optional<Answer> answer = repository.findById(answerId);
        System.out.println("-----------find done-----------");
        return answer;
    }

    @PostMapping("answer")
    public void addAnswer(@RequestBody Answer answer) {
        // 답변 추가
        repository.save(answer);
        System.out.println("-----------add done-----------");;
    }

    @PatchMapping("/answer/{answerId}")
    private Answer updateAnswer(@PathVariable Integer answerId, @RequestBody Answer answer) {
        // 답변 수정
        repository.save(answer);
        System.out.println("-----------update done-----------");;
        return answer;
    }
}
