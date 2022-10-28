package preproject.stack.tag.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import preproject.stack.post.dto.PostPatchDto;
import preproject.stack.post.entity.Post;
import preproject.stack.response.MultiResponseDto;
import preproject.stack.response.SingleResponseDto;
import preproject.stack.tag.dto.TagPatchDto;
import preproject.stack.tag.dto.TagPostDto;
import preproject.stack.tag.entity.Tag;
import preproject.stack.tag.mapper.TagMapper;
import preproject.stack.tag.service.TagService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tag")
public class TagController {

    private final TagService tagService;
    private final TagMapper mapper;

    @PostMapping
    public Tag createTag(@RequestBody Tag tag){
        return tagService.createTag(tag);
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag(@PathVariable("tag-id") long tagId , @RequestBody TagPatchDto tagPatchDto){
        tagPatchDto.setTagId(tagId);
        Tag tag = mapper.tagPatchDtoToTag(tagPatchDto);
        Tag response = tagService.updateTag(tag);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.tagToTagResponseDto(response)),HttpStatus.OK);

    }
    @GetMapping
    public ResponseEntity getTags(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size){

        Page<Tag> pageTags = tagService.findTags(page - 1, size);
        List<Tag> tags = pageTags.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.tagsToTagResponseDto(tags),pageTags), HttpStatus.OK
        );
    }
    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(@PathVariable("tag-id") long tagId){
        Tag tag = tagService.findTag(tagId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.tagToTagResponseDto(tag)),HttpStatus.OK);
    }

    @DeleteMapping("/{tag-id}")
    public ResponseEntity deletePost(@PathVariable("tag-id") long tagId){
        tagService.deleteTag(tagId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
