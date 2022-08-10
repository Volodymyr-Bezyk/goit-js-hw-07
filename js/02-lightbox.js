import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);

renderGalleryEls(markupGallery);

const modalPicture = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

function createMarkupGallery(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return `${acc} <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  }, '');
}

function renderGalleryEls(mark) {
  parentGalleryEl.innerHTML = mark;
}
