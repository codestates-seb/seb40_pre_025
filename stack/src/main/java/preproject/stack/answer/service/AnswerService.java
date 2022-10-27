package preproject.stack.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.repository.AnswerRepository;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {

    // DI
    private final AnswerRepository answerRepository;

    // 답변 등록
    public Answer createAnswer(Answer answer){
        answer.setReadCount(0L);
        answer.setVoteCount(0L);

        return answerRepository.save(answer);
    }

    // 답변 업데이트
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).orElseThrow(IllegalArgumentException::new);

        findAnswer.setBody(answer.getBody());
        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }
    // 답변 찾기
    public Answer findAnswer(Long answerId){
        Answer findAnswer = answerRepository.findById(answerId).orElseThrow(IllegalArgumentException::new);
        return findAnswer;
    }

    // 답변 전체 페이징 보기
    public List<Answer> findAnswers(Integer page , Integer size){
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return answerRepository.findAll(pageRequest).getContent();
    }

    // 답변 존재 여부 확인
    private Optional<Answer> findVerifiedAnswer(Long answerId) {
        Optional<Answer> findAnswer = answerRepository.findById(answerId);

        return findAnswer;
    }
    // 답변 삭제
    public void deleteAnswer(@Positive Long answerId) {
        answerRepository.deleteById(answerId);
    }

}