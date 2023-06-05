import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = createMarkupImages(galleryItems);

function createMarkupImages(array) {
  return array
    .map((element) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", createModalImage);

function createModalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(
      `<div class="modal"><img src="${event.target.dataset.source}" alt='${event.target.alt}'></div>`,
      {
        onShow: (instance) => {
          window.addEventListener(
            "keydown",
            (event) => {
              if (event.code === "Escape") {
                instance.close();
              }
            },
            { once: true }
          );
        },
      }
    );
    instance.show();
  }
}
console.log(galleryItems);
