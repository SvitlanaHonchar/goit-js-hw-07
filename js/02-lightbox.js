import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryWholeEl = document.querySelector(".gallery");

// ---створення розмітки
function createGalleryEl({ preview, original, description } = {}) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const creatingGallery = galleryItems
  .map((galleryItem) => createGalleryEl(galleryItem))
  .join("");

galleryWholeEl.insertAdjacentHTML("beforeend", creatingGallery);
// ---/створення розмітки

// ---створення події
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryImgClick(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== "IMG") {
    return;
  }

  //   console.log(target.alt);
}

galleryWholeEl.addEventListener("click", onGalleryImgClick);

// ---/створення події
