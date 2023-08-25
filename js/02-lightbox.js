import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const imageList = document.querySelector('.gallery');
imageList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
imageList.addEventListener('click', handlerClick);

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

function handlerClick(evt) {
    evt.preventDefault();
    const clickedElement = evt.target;

    if (!clickedElement.classList.contains('gallery__image')) {
        return;
    }

    const source = clickedElement.dataset.source;

    // Use simpleLightbox's functions instead of basicLightbox
    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

console.log(galleryItems);