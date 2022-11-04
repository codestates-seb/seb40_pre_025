package preproject.stack.answer.dto;

import lombok.Getter;
import lombok.Setter;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.user.dto.UserResponseDto;

@Getter @Setter
public class AnswerPageDto {
    private MultiResponseDto answers;
    private UserResponseDto userResponseDto;
}
