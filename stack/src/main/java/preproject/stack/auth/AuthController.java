package preproject.stack.auth;

import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//기본 틀.. 전체 수정해야할것
@Controller
@RequestMapping("/xxx")
public class AuthController {
    @GetMapping("/???")
    public String loginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String login() {
        return "home";
    }
}
