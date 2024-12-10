import React, { useState } from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import styles from './GallerySection.module.scss';

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

export default function GallerySection() {
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
            <div className={styles.galleryContainer} id="Gallery">
                <Gallery photos={photos} onClick={openLightbox} />

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
} 