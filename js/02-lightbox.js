import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);

renderGalleryEls(markupGallery);

if ('loading' in HTMLImageElement.prototype) {
  console.log('SUPPORT');
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  console.log('NOT SUPPORT');
  const myScript = document.querySelector('script[src="js/02-lightbox.js"]');
  const lazySizesLibr = `  <script
      src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
      integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>`;
  myScript.insertAdjacentElement('beforebegin');
}

const modalPicture = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

function createMarkupGallery(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return `${acc} <a class="gallery__item lazyload" href="${original}" ">
  <img class="gallery__image" loading="lazy" data-src="${preview}" alt="${description}" />
</a>`;
  }, '');
}

function renderGalleryEls(mark) {
  parentGalleryEl.innerHTML = mark;
}
