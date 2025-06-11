// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/img/gallery/beach.jpg',
    thumbnail: '/img/gallery/beach.jpg',
  },
  {
    original: '/img/gallery/forest.jpg',
    thumbnail: '/img/gallery/forest.jpg',
  },
  {
    original: '/img/gallery/city.jpg',
    thumbnail: '/img/gallery/city.jpg',
  },
];

export default function ImageGalleryComponent() {
  return <ImageGallery items={images} />;
}