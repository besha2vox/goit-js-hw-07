import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryCardSet = galleryItems.map(createGalleryCard).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryCardSet);

galleryRef.addEventListener('click', onOpenModal);

function createGalleryCard({ preview, original, description }) {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}

function onOpenModal(e) {
    e.preventDefault();
    const isImage = e.target.classList.contains('gallery__image');

    if (!isImage) {
        return;
    }
    createModal(e.target).show();
    window.addEventListener('keyup', onCloseModalKeyUp);
}

function createModal(params) {
    return basicLightbox.create(`
        <div class="modal">
        <img src="${params.dataset.source}" alt="${params.alt}" />
        </div>
    `);
}

function onCloseModalKeyUp(e) {
    const backDrop = document.querySelector('.basicLightbox');

    if (e.code !== 'Escape') return;
    backDrop.remove();
    window.removeEventListener('keyup', onCloseModalKeyUp);
}
