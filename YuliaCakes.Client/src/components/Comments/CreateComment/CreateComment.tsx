import React, { useState } from "react";

export default function CreateComment() {
    const [comment, setComment] = useState(''); // todo: set it in commentsSection component
    const [name, setName] = useState('');

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
        //   setComments([...comments, { name, comment }]);
          setName('');
          setComment('');
        }
      };

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}