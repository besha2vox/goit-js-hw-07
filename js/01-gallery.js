import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryCardSet = galleryItems.map(createGalleryCard).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryCardSet);

galleryRef.addEventListener('click', onOpenModal);

function createGalleryCard({ preview, original, description }) {
    return `<div class="gallery__item">
    <img src="${preview}" alt="${description}" data-original="${original}" class="gallery__image">
  </div>`;
}

function onOpenModal(e) {
    const isImage = e.target.classList.contains('gallery__image');

    if (!isImage) {
        return;
    }
    createModal(e.target);
    window.addEventListener('keyup', onCloseModalKeyUp);
}

function createModal(params) {
    const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${params.dataset.original}" alt="${params.alt}" />
        </div>
    `);

    instance.show();
}

function onCloseModalKeyUp(e) {
    const backDrop = document.querySelector('.basicLightbox');

    if (e.code !== 'Escape') return;
    backDrop.remove();
    window.removeEventListener('keyup', onCloseModal);
}
