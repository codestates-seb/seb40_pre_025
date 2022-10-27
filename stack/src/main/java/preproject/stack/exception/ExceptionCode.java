package preproject.stack.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
<<<<<<< HEAD
    USER_EXIST(405,"USER EXIST" );


=======
    USER_EXIST(409, "USER EXIST");
>>>>>>> 3c759ab4c6a1e421b422efcc3ef75e44704f126e
    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
