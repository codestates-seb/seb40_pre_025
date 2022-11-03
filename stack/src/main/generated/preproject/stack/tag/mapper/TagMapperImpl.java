package preproject.stack.tag.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import preproject.stack.tag.dto.TagPatchDto;
import preproject.stack.tag.dto.TagPostDto;
import preproject.stack.tag.dto.TagResponseDto;
import preproject.stack.tag.entity.Tag;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T13:35:17+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.14 (Oracle Corporation)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public Tag tagPostDtoToTag(TagPostDto tagPostDto) {
        if ( tagPostDto == null ) {
            return null;
        }

        Tag tag = new Tag();

        tag.setTagId( tagPostDto.getTagId() );
        tag.setTagName( tagPostDto.getTagName() );

        return tag;
    }

    @Override
    public Tag tagPatchDtoToTag(TagPatchDto tagPatchDto) {
        if ( tagPatchDto == null ) {
            return null;
        }

        Tag tag = new Tag();

        tag.setTagId( tagPatchDto.getTagId() );
        tag.setTagName( tagPatchDto.getTagName() );

        return tag;
    }

    @Override
    public TagResponseDto tagToTagResponseDto(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

        if ( tag.getTagId() != null ) {
            tagResponseDto.setTagId( tag.getTagId() );
        }
        tagResponseDto.setTagName( tag.getTagName() );

        return tagResponseDto;
    }

    @Override
    public List<TagResponseDto> tagsToTagResponseDto(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagResponseDto( tag ) );
        }

        return list;
    }
}
