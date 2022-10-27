package preproject.stack.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.repository.AnswerRepository;

import javax.validation.constraints.Positive;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {

    // DI
    private final AnswerRepository answerRepository;

    // 질문 등록
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    // 질문 업데이트
    public Answer updateAnswer(Answer answer){

        return answerRepository.save(answer);
    }

    // 질문 찾기
    public Optional<Answer> findAnswer(Integer answerId){
        Optional<Answer> findAnswer = answerRepository.findById(answerId);
        return findAnswer;
    }

    // 질문 전체 페이징 보기
    public Page<Answer> findAnswers(int page , int size){
        return answerRepository.findAll(PageRequest.of(page,size, Sort.by("answerId").descending()));
    }

    // 질문 존재 여부 확인
    private Optional<Answer> findVerifiedAnswer(Integer answerId) {
        Optional<Answer> findAnswer = answerRepository.findById(answerId);

        return findAnswer;
    }

    public void deleteAnswer(@Positive Integer answerId) {
        answerRepository.deleteById(answerId);
    }

}
