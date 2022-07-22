import { galleryItems } from './gallery-items.js';
// Change code below this line
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
//   // Do something…
// });

// gallery.on('error.simplelightbox', function (e) {
//   console.log(e); // Some usefull information
// });

// const gallery = new SimpleLightbox('.gallery a', {
//   sourceAttr: 'href',
//   captionsData: 'alt',
// });

const parentGalleryRef = document.querySelector('.gallery');
const cardElementsMarkup = createGalleryCards(galleryItems);
parentGalleryRef.insertAdjacentHTML('afterbegin', cardElementsMarkup);
preventDefActionToLinks(parentGalleryRef);

function createGalleryCards(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}" >
  <img class="gallery__image big" src="${preview}" alt="${description} " />
</a>`
    )
    .join('');
}

function preventDefActionToLinks(parEl) {
  parEl.querySelectorAll('.gallery__item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
    });
  });
}

function onGalleryCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
    history: true,
    fileExt: false,
  });
}

parentGalleryRef.addEventListener('click', onGalleryCardClick);
// console.log(cardElementsMarkup);
// console.log(galleryItems);
