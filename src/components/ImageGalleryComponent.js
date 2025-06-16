// src/components/ImageGalleryComponent.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/img/gallery/1.png',
    thumbnail: '/img/gallery/1.png',
  },
  {
    original: '/img/gallery/2.png',
    thumbnail: '/img/gallery/2.png',
  },
  {
    original: '/img/gallery/3.png',
    thumbnail: '/img/gallery/3.png',
  },
  {
    original: '/img/gallery/4.png',
    thumbnail: '/img/gallery/4.png',
  },
  {
    original: '/img/gallery/5.png',
    thumbnail: '/img/gallery/5.png',
  },
  {
    original: '/img/gallery/6.png',
    thumbnail: '/img/gallery/6.png',
  },
  {
    original: '/img/gallery/7.png',
    thumbnail: '/img/gallery/7.png',
  },
  {
    original: '/img/gallery/8.png',
    thumbnail: '/img/gallery/8.png',
  }, 
  {
    original: '/img/gallery/9.png',
    thumbnail: '/img/gallery/9.png',
  },
  {
    original: '/img/gallery/10.png',
    thumbnail: '/img/gallery/10.png',
  },
  {
    original: '/img/gallery/11.png',
    thumbnail: '/img/gallery/11.png',
  },
  {
    original: '/img/gallery/12.png',
    thumbnail: '/img/gallery/12.png',
  },
  {
    original: '/img/gallery/13.png',
    thumbnail: '/img/gallery/13.png',
  },
  {
    original: '/img/gallery/14.png',
    thumbnail: '/img/gallery/14.png',
  },
  {
    original: '/img/gallery/15.png',
    thumbnail: '/img/gallery/15.png',
  },
  {
    original: '/img/gallery/16.png',
    thumbnail: '/img/gallery/16.png',
  }, 
  {
    original: '/img/gallery/17.png',
    thumbnail: '/img/gallery/17.png',
  },
  {
    original: '/img/gallery/18.png',
    thumbnail: '/img/gallery/18.png',
  },
  {
    original: '/img/gallery/19.png',
    thumbnail: '/img/gallery/19.png',
  },
  {
    original: '/img/gallery/20.png',
    thumbnail: '/img/gallery/20.png',
  },
  {
    original: '/img/gallery/21.png',
    thumbnail: '/img/gallery/21.png',
  },
  {
    original: '/img/gallery/22.png',
    thumbnail: '/img/gallery/22.png',
  },
  {
    original: '/img/gallery/23.png',
    thumbnail: '/img/gallery/23.png',
  },
];

export default function ImageGalleryComponent() {
  return <ImageGallery items={images}
    autoPlay={true}
    showIndex={true}
    />;
}