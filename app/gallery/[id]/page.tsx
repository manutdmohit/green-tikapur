'use client';

import { useParams } from 'next/navigation';

const GalleryImagesPage = () => {
  const { id } = useParams();

  return <h2>{id}</h2>;
};

export default GalleryImagesPage;
