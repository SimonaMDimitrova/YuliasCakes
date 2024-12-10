import React, { useState } from "react";
import styles from "./CreateComment.module.scss";

import AddComment from "../../../models/add-comment.model";
import commentsService from "../../../services/comments-service";

interface CreateCommentProps {
    onRefresh: () => void;
}

const CreateComment: React.FC<CreateCommentProps> = ({ onRefresh }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const [isCreateCommentVisible, setCreateCommentVisible] = useState(false);

    function toggleCreateCommentVisibility() {
        setCreateCommentVisible(!isCreateCommentVisible);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author && content) {
            const comment = new AddComment(author, content);
            commentsService.addComment(comment, onRefresh);

            setCreateCommentVisible(false);
            setAuthor('');
            setContent('');
        } else {
            // error message
        }
    };

    return (
        <React.Fragment>
            <div className={styles.createCommentSection}>
                {
                    isCreateCommentVisible ? (
                        <>
                            <h4>Напишете Вашия коментар</h4>
                            <form onSubmit={handleCommentSubmit} style={{ marginTop: '20px', textAlign: 'center' }}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Вашето име"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        required
                                        style={{ padding: '10px', margin: '5px', width: '30rem', borderRadius: '5px', border: '1px solid #ccc' }}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Вашият коментар"
                                        value={content}
                                        maxLength={100}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                        style={{ padding: '10px', margin: '5px', width: '30rem', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    />
                                </div>
                                <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#E94C9A', color: '#fff', cursor: 'pointer', marginRight: '0.5em' }}>
                                    Изпрати коментар
                                </button>
                                <button type="button" onClick={toggleCreateCommentVisibility} style={{ padding: '8.5px 18px', borderRadius: '5px', border: 'solid 2px #E94C9A', backgroundColor: '#ffffff', color: '#E94C9A', cursor: 'pointer' }}>
                                    Отказ
                                </button>
                            </form>
                        </>
                    ) : (
                        <div>
                            <h4>Опитвали сте от тортите ни?</h4>
                            <button onClick={toggleCreateCommentVisibility} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#7bc3ca', color: '#fff', cursor: 'pointer' }}>
                                Оставете коментар!
                            </button>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
}

export default CreateComment;