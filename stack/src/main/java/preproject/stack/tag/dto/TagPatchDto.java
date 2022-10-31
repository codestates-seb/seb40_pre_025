package preproject.stack.tag.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class TagPatchDto {
    private long tagId;
    private String tagName;

    public void setTagId(long tagId){
        this.tagId = tagId;
    }
}
