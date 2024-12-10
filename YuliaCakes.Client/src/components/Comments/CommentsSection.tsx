import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard/CommentCard";
import styles from './CommentsSection.module.scss';
import Title from "../Title";
import CreateComment from "./CreateComment/CreateComment";
import Comment from "../../models/comment.model"
import commentsService from "../../services/comments-service";

export default function CommentsSection() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getAllComments()
    }, []);

    const refreshData = () => {
        getAllComments();
    };

    function getAllComments() {
        commentsService.getAllComments(setComments);
    }

    return (
        <div id="Comments">
            <Title>Коментари</Title>

            <div className={styles.commentsListWrapper}>
                
                    {comments.length > 0 ? <div className={styles.commentsList}>
                                                {
                                                    comments?.map((comment: Comment) => (
                                                        <CommentCard key={comment.id} {...comment} />
                                                    ))
                                                }
                                           </div>
                              : <div className={styles.commentsNotFound}>Няма намерени коментари!</div>}
                
            </div>

            <CreateComment onRefresh={refreshData}></CreateComment>
        </div>
    );
}