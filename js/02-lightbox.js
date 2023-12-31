import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const imageList = document.querySelector('.gallery');
imageList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}" 
                    data-source="${original}"
                    width="340"
                    alt="${description}" />
            </a>
        </li>`
    ).join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);