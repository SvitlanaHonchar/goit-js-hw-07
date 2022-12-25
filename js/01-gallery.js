import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

// ---створення розмітки
const galleryWholeEl = document.querySelector(".gallery");

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

// ---створення події

function onGalleryImgClick(e) {
  e.preventDefault();
  const { target } = e;
}

galleryWholeEl.addEventListener("click", onGalleryImgClick);

// ---/створення події
