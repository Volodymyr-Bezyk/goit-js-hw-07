import { galleryItems } from './gallery-items.js';
// Change code below this line

const parentGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);
let modalPicture;

renderGalleryEls(markupGallery);
preventDefForInnerLinks(parentGalleryEl);

parentGalleryEl.addEventListener('click', onPreviewPictureClick);

function createMarkupGallery(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return ` ${acc}<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }, '');
}

function renderGalleryEls(mark) {
  parentGalleryEl.innerHTML = mark;
}

function preventDefForInnerLinks(parentEl) {
  parentEl.querySelectorAll('.gallery__link').forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
    })
  );
}

function onPreviewPictureClick(e) {
  if (e.target.tagName !== 'IMG') {
    return;
  }
  (modalPicture = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="1200" height="900">
`,
    {
      onShow: modalPicture =>
        window.addEventListener('keydown', closeModalOnEsc),
      onClose: modalPicture =>
        window.removeEventListener('keydown', closeModalOnEsc),
    }
  )),
    modalPicture.show();
}

function closeModalOnEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modalPicture.close();
}
