import React, { useState } from 'react';
import Title from './Title';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Dashboard.css';
import CommentsSection from './Comments/CommentsSection';

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

  const openLightbox = (event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <React.Fragment>       
      <div className="gallery-container">
        <Title>Галерия</Title>
        <Gallery photos={photos} onClick={openLightbox} />

        <p className="summary">
          Тортите на Юлето е скромен проект на една сладкарка, която през деня работи като QA, но след работа създава невероятни торти за семейството, приятелите и колегите си.
          Със страст към сладкарството и усет за дизайн, Юлето съчетава креативността и вкуса, за да изработва зашеметяващи торти, които със сигурност ще впечатлят.
          От елегантни сватбени торти до вкусни торти за рождени дни, всяка торта е направена с най-добрите съставки и личен щрих.
        </p>
      </div>

      <CommentsSection />

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
    </React.Fragment>
  );
};

export default Dashboard;