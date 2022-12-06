import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

addBasicLightBoxScript();

const gallery = document.querySelector('.gallery');
console.log(gallery);

createMarkUp();

gallery.addEventListener('click', onImageClick);

function createMarkUp() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) => {
      acc += `<div class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                    />
                  </a>
                </div>`;
      return acc;
    },
    ''
  );
  gallery.insertAdjacentHTML('beforeend', markup);
}

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  const image = e.target.dataset.source;
  const imageAlt = e.target.alt;
  onShowImage(image, imageAlt);
}

function addBasicLightBoxScript() {
  const lightBoxLink = `<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"
      />`;
  document.head.insertAdjacentHTML('beforeend', lightBoxLink);
  //   const lightBoxScript =
  //     '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>';
  //   document.body.insertAdjacentHTML('beforeend', lightBoxScript);
  const lightBoxScript = document.createElement('script');
  lightBoxScript.src =
    '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>';
  document.body.appendChild(lightBoxScript);
}

function onShowImage(image, imageAlt) {
  const instance = basicLightbox.create(`
    <img src="${image}" alt="${imageAlt}" >
`);

  instance.show();
}
