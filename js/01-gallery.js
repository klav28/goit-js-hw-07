import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = (images) => {
    return images.map(({ preview, description }) => {
        return `<div class="gallery__item"><img src=${preview} alt="${description}" class="gallery__image"/></div>`;
    }).join(" ");
}

// console.log(markupGallery(galleryItems));
   
const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markupGallery(galleryItems);
