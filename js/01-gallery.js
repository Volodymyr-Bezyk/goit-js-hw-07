import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance;
const parentGalleryRef = document.querySelector('.gallery');
const galleryCardsMarkup = createGalleryCards(galleryItems);
parentGalleryRef.innerHTML = galleryCardsMarkup;

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image lazyload"
      data-src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

function preventDefActionToLinks(parEl) {
  parEl.querySelectorAll('a').forEach(e =>
    e.addEventListener('click', e => {
      e.preventDefault();
    })
  );
}

function onGalleryCardClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  instance = basicLightbox.create(
    `
		<img class='gallery__image' width="1400" height="900" src="${event.target.dataset.source}">

	`,
    {
      closable: true,
      onShow: instance => {
        document.addEventListener('keydown', closingModalOnEscape);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closingModalOnEscape);
      },
    }
  );
  instance.show();
}

function closingModalOnEscape(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

preventDefActionToLinks(parentGalleryRef);
parentGalleryRef.addEventListener('click', onGalleryCardClick);

console.log(galleryItems);
