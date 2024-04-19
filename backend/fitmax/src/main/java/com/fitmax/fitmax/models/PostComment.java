package dev.paf.FitFusion.Models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
public class PostComment {

    @Id
    private String id;

    private String postId; // ID of the post this comment belongs to
    private String userId;
    private String text;
