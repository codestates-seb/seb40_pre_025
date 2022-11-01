package preproject.stack.post.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.stack.post.dto.PostPatchDto;
import preproject.stack.post.dto.PostPostDto;
import preproject.stack.post.dto.PostResponseDto;
import preproject.stack.post.entity.Post;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T00:33:20+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14 (Oracle Corporation)"
)
@Component
public class PostMapperImpl implements PostMapper {

    @Override
    public Post postPostDtoToPost(PostPostDto postPostDto) {
        if ( postPostDto == null ) {
            return null;
        }

        Post post = new Post();

        post.setCreatedAt( postPostDto.getCreatedAt() );
        post.setModifiedAt( postPostDto.getModifiedAt() );
        post.setBody( postPostDto.getBody() );
        post.setTitle( postPostDto.getTitle() );

        return post;
    }

    @Override
    public Post postPatchDtoToPost(PostPatchDto postPatchDto) {
        if ( postPatchDto == null ) {
            return null;
        }

        Post post = new Post();

        post.setPostId( postPatchDto.getPostId() );
        post.setBody( postPatchDto.getBody() );
        post.setTitle( postPatchDto.getTitle() );

        return post;
    }

    @Override
    public PostResponseDto postToResponseDto(Post post) {
        if ( post == null ) {
            return null;
        }

        PostResponseDto postResponseDto = new PostResponseDto();

        postResponseDto.setPostId( post.getPostId() );
        postResponseDto.setTitle( post.getTitle() );
        postResponseDto.setBody( post.getBody() );
        postResponseDto.setCreatedAt( post.getCreatedAt() );
        postResponseDto.setModifiedAt( post.getModifiedAt() );

        return postResponseDto;
    }

    @Override
    public List<PostResponseDto> postsToPostResponseDto(List<Post> posts) {
        if ( posts == null ) {
            return null;
        }

        List<PostResponseDto> list = new ArrayList<PostResponseDto>( posts.size() );
        for ( Post post : posts ) {
            list.add( postToResponseDto( post ) );
        }

        return list;
    }
}
