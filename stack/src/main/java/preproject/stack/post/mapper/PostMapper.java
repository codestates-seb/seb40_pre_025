package preproject.stack.post.mapper;

import org.mapstruct.Mapper;
import preproject.stack.post.dto.PostAnswerResponseDto;
import preproject.stack.post.dto.PostPatchDto;
import preproject.stack.post.dto.PostPostDto;
import preproject.stack.post.dto.PostResponseDto;
import preproject.stack.post.entity.Post;
import preproject.stack.user.dto.UserPatchDto;
import preproject.stack.user.dto.UserPostDto;
import preproject.stack.user.dto.UserResponseDto;
import preproject.stack.user.entity.User;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    Post postPostDtoToPost(PostPostDto postPostDto);
    Post postPatchDtoToPost(PostPatchDto postPatchDto);
    PostResponseDto postToResponseDto(Post post);


    List<PostResponseDto> postsToPostResponseDto(List<Post> posts);
}
