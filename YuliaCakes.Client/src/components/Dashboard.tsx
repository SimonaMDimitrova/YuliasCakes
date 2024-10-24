import React, { useState } from 'react';
import Title from './Title';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Dashboard.css';

type Photo = {
  src: string;
  width: number;
  height: number;
};

const photos: Photo[] = [
  {
    src: "/images/resources/torta2.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/images/resources/torta1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/images/resources/torta3.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/images/resources/torta4.jpg",
    width: 4,
    height: 3
  }
];

const Dashboard: React.FC = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const openLightbox = (event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <React.Fragment>       
      <div className="gallery-container">
      <Title>Галерия</Title>
      <Gallery photos={photos} onClick={openLightbox} />

      <p className="summary">
        Тортите на Юлето е скромен проект на една сладкарка, който през деня работи като QA, но след работа създава невероятни торти за семейството, приятелите и колегите си.
        Със страст към сладкарството и усет за дизайн, Юлето съчетава креативността и вкуса, за да изработва зашеметяващи торти, които със сигурност ще впечатлят.
        От елегантни сватбени торти до вкусни торти за рождени дни, всяка торта е направена с най-добрите съставки и личен щрих.
      </p>

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
              onChange={(e) => setComment(e.target.value)}
              required
              style={{ padding: '10px', margin: '5px', width: '30rem', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#E94C9A', color: '#fff', cursor: 'pointer' }}>
            Изпрати коментар
          </button>
        </form>

        <div className="comments-container" style={{ marginTop: '20px', textAlign: 'center' }}>
          {comments.length > 0 && <h3>Коментари:</h3>}
          <div className="comments-carousel">
            {comments.map((c, index) => (
              <div key={index} className="comment-card">
                <div className="avatar">
                  <img src="/images/icons/default-avatar.png" alt="Avatar" />
                </div>
                <div className="comment-content">
                  <strong>{c.name}</strong>
                  <p>{c.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
        />
      )}
    </div>
    </React.Fragment>
  );
};

export default Dashboard;