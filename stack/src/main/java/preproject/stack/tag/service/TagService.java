package preproject.stack.tag.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import preproject.stack.exception.BusinessLogicException;
import preproject.stack.exception.ExceptionCode;
import preproject.stack.post.entity.Post;
import preproject.stack.tag.entity.Tag;
import preproject.stack.tag.repository.TagRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public Tag createTag(Tag tag){
        return tagRepository.save(tag);
    }

    public Tag updateTag(Tag tag) {

        Tag findTag = findVerifiedTag(tag.getTagId());
        Optional.ofNullable(findTag.getTagName())
                        .ifPresent(tagName -> findTag.setTagName(tagName));

        return tagRepository.save(findTag);
    }


    public Tag findTag(long tagId){
        return findVerifiedTag(tagId);
    }

    public Page<Tag> findTags(int page,int size){
        return tagRepository.findAll(PageRequest.of(page, size , Sort.by("tagId").descending()));
    }

    public void deleteTag(long tagId){
        Tag findTag = findVerifiedTag(tagId);
        tagRepository.delete(findTag);
    }
    public Tag findVerifiedTag(long tagId){
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        return optionalTag.orElseThrow(() -> new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
    }

}
