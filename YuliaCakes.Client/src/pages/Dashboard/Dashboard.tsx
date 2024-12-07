import React, { useState } from 'react';
import './Dashboard.module.scss';

import GallerySection from '../../components/Gallery/GallerySection';
import CommentsSection from '../../components/Comments/CommentsSection';

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <GallerySection />
      <CommentsSection />
    </React.Fragment>
  );
};

export default Dashboard;