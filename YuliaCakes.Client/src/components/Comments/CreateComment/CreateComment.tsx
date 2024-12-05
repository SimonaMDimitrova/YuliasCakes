import React, { useState } from "react";
import styles from "./CreateComment.module.scss";

export default function CreateComment() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [isCreateCommentVisible, setCreateCommentVisible] = useState(false);

    function toggleCreateCommentVisibility() {
        setCreateCommentVisible(!isCreateCommentVisible);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
            setName('');
            setComment('');
        }
    };

    return (
        <React.Fragment>
            <div className={styles.createCommentSection}>
                {
                    isCreateCommentVisible ? (
                        <form onSubmit={handleCommentSubmit} style={{ marginTop: '20px', textAlign: 'center' }}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Вашето име"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    style={{ padding: '10px', margin: '5px', width: '30rem', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Вашият коментар"
                                    value={comment}
                                    maxLength={100}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                    style={{ padding: '10px', margin: '5px', width: '30rem', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#E94C9A', color: '#fff', cursor: 'pointer' }}>
                                Изпрати коментар
                            </button>
                        </form>
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