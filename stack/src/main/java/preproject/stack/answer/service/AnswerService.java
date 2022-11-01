package preproject.stack.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.stack.answer.entity.Answer;
import preproject.stack.answer.repository.AnswerRepository;
import preproject.stack.exception.BusinessLogicException;
import preproject.stack.exception.ExceptionCode;
import preproject.stack.post.entity.Post;
import preproject.stack.post.repository.PostRepository;
import preproject.stack.user.entity.User;
import preproject.stack.user.repository.UserRepository;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {

    // DI
    private final AnswerRepository answerRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;


    // 답변 등록
    public Answer createAnswer(long userId ,long postId ,Answer answer){
        Post post = postRepository.findByPostId(postId);
        User user = userRepository.findByUserId(userId);
        answer.setPost(post);
        answer.setReadCount(0L);
        answer.setVoteCount(0L);
        answer.setUser(user);
        return answerRepository.save(answer);
    }

    // 답변 업데이트
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getBody())
                .ifPresent(answerBody -> findAnswer.setBody(answerBody));

        Optional.ofNullable(answer.getCreatedAt())
                .ifPresent(answerCreateAt -> findAnswer.setCreatedAt(answerCreateAt));

        return answerRepository.save(findAnswer);
    }
    // 답변 찾기
    public Answer findAnswer(Long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        return findAnswer;
    }


    // 답변 전체 페이징 보기
    public Page<Answer> findAnswers(long postId ,int page , int size){
        return answerRepository.findByPost_PostId(postId, PageRequest.of(page,size,Sort.by("answerId").descending()));

    }

    // 답변 존재 여부 확인
    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> findAnswer = answerRepository.findById(answerId);
        Answer answer = findAnswer.orElseThrow(() ->new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return answer;
    }
    // 답변 삭제
    public void deleteAnswer(@Positive Long answerId) {
        answerRepository.deleteById(answerId);
    }

    // 자기가 작성한 답변 조회
    public Page<Answer> findUserAnswers(long userId,int page, int size){
        return answerRepository.findByUser(userId,PageRequest.of(page, size,Sort.by("answerId").descending()));

    }

}