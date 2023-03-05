import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = (images) => {
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/></a></div>`;
    }).join(" ");
}

const handleGallery = (ev) => {
    ev.preventDefault();

    if (ev.target.nodeName !== "IMG") {
        return
    }

    const imageSrc = ev.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src=${imageSrc} width="1280">`);
    instance.show();

    window.addEventListener('keydown', handleKeydown);

    function handleKeydown(ev) {
        if (ev.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', handleKeydown);
        }
    }
}

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markupGallery(galleryItems);

galleryEl.addEventListener("click", handleGallery);
