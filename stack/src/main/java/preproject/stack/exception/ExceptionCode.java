package preproject.stack.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USER_EXIST(409, "USER EXIST"),
    MEMBER_NOT_FOUND(409, "MEMER_NOT_FOUND"),
    QUESTION_NOT_FOUND(409, "QUESTION_NOT_FOUND");
    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
