// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', markupGallery(galleryItems));

function markupGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="ssss"/>
            
        </a>`,
    )
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});
