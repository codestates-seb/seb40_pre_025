package preproject.stack.saved.entity;

import preproject.stack.member.entity.Member;
import preproject.stack.post.entity.Post;

import java.util.ArrayList;
import java.util.List;

public class Saved {
    private long savedId;
    private Member member;
    private List<Post> savedPosts = new ArrayList<>();
}
