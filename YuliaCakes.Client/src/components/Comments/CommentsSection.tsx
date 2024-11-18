import React from "react";
import CommentCard from "./CommentCard/CommentCard";
import styles from './CommentsList.module.scss';
import Title from "../Title";
import CreateComment from "./CreateComment/CreateComment";

export default function CommentsList() {
    let items = [1, 2, 3, 4, 5]
    return (
        <React.Fragment>
            <Title>Коментари</Title>
            <div className={styles.commentsListWrapper}>
                <div className={styles.commentsList}>
                    {items.map(item => <CommentCard />)}
                </div>
            </div>

            <CreateComment></CreateComment>
        </React.Fragment>
    );
}