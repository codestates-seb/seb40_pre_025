package preproject.stack.tag.mapper;

import org.mapstruct.Mapper;
import preproject.stack.post.dto.PostResponseDto;
import preproject.stack.post.entity.Post;
import preproject.stack.tag.dto.TagPatchDto;
import preproject.stack.tag.dto.TagPostDto;
import preproject.stack.tag.dto.TagResponseDto;
import preproject.stack.tag.entity.Tag;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostDtoToTag(TagPostDto tagPostDto);
    Tag tagPatchDtoToTag(TagPatchDto tagPatchDto);
    TagResponseDto tagToTagResponseDto(Tag tag);
    List<TagResponseDto> tagsToTagResponseDto(List<Tag> tags);
}
