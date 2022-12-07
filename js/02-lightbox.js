import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createMarkUp();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});

function createMarkUp() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) => {
      acc += `<a class="gallery__item" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>`;
      return acc;
    },
    ''
  );
  gallery.insertAdjacentHTML('beforeend', markup);
}
