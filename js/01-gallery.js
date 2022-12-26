import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryWholeEl = document.querySelector(".gallery");

// ---створення розмітки
function createGalleryEl({ preview, original, description } = {}) {
  return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
}

const creatingGallery = galleryItems
  .map((galleryItem) => createGalleryEl(galleryItem))
  .join("");

galleryWholeEl.insertAdjacentHTML("beforeend", creatingGallery);
// ---/створення розмітки

// ---модальне вікно
const origImgEl = basicLightbox.create(`
    <div class="modal">
        <img src='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg' width="800" height="600">
    </div>
`);
// ---/модальне вікно

// ---створення події

function onGalleryImgClick(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") {
    return;
  }

  // return target.dataset.source;
  origImgEl.show();
  const modalImgEl = document.querySelector(".modal img");
  modalImgEl.src = target.dataset.source;
}

function onEscKeyDown(e) {
  if (e.code === "Escape") {
    origImgEl.close();
  }
}

galleryWholeEl.addEventListener("click", onGalleryImgClick);
document.addEventListener("keydown", onEscKeyDown);

// ---/створення події
