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
    return new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}
