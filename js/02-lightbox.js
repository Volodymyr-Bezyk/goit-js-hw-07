import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentGalleryRef = document.querySelector('.gallery');
const cardElementsMarkup = createGalleryCards(galleryItems);
parentGalleryRef.insertAdjacentHTML('afterbegin', cardElementsMarkup);
preventDefActionToLinks(parentGalleryRef);

function createGalleryCards(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}" >
  <img class="gallery__image" src="${preview}" alt="${description} " />
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

const pic = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  history: false,
  docClose: false,
});

// console.log(galleryItems);

// const fruits = ['banana', 'orange', 'apple', 'orange', 'pear', 'banana'];

// const result = fruits.reduce(
//   (acc, el) => (acc[el] ? { ...acc, [el]: acc[el] + 1 } : { ...acc, [el]: 1 }),
//   {}
// );
// console.log(result);
