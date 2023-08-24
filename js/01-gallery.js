import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const imageList = document.querySelector('.gallery');
imageList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
imageList.addEventListener('click', handlerClick);

function createMarkup(arr) {
    return arr.map(({preview, original, description}) =>  
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
    const item = galleryItems.find((item) => item.original === source);

    const instance = basicLightbox.create(`
        <img src="${item.original}" width="800" height="600">
    `);
    instance.show();

    // Add event listener for the "Escape" key
    document.addEventListener('keydown', (escEvent) => {
        if (escEvent.key === 'Escape') {
            instance.close();
        }
    });
}

console.log(galleryItems);