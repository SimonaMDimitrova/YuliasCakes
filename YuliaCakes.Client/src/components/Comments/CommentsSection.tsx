import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard/CommentCard";
import styles from './CommentsSection.module.scss';
import Title from "../Title";
import CreateComment from "./CreateComment/CreateComment";
import Comment from "../../models/comment"

export default function CommentsSection() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch("https://localhost:44315/api/Comments/GetAll") // use constants instead ???
            .then((response) => response.json())
            .then((data) => setComments(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <React.Fragment>
            <Title>Коментари</Title>
            <div className={styles.commentsListWrapper}>
                <div className={styles.commentsList}>
                    {comments.map((comment: Comment) => (
                        <CommentCard key={comment.id} {...comment} />
                    ))}
                </div>
            </div>

            <CreateComment></CreateComment>
        </React.Fragment>
    );
}