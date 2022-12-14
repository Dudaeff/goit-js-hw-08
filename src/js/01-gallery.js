// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', makeGallaryItemsMarkup(galleryItems));
galleryRef.addEventListener('click', getOriginalImgLinkOnClick);


function makeGallaryItemsMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                  <a class="gallery__link" href="${original}">
                    <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                    />
                  </a>
                </div>`
    }).join('');
};

function getOriginalImgLinkOnClick(evt) {
    evt.preventDefault();
    const currentImage = evt.target.classList.contains('gallery__image');
    const originalImgLink = evt.target.dataset.source;

    if (!currentImage) {
        return;
    }
    openModalWindowGallery(originalImgLink);
};

function openModalWindowGallery(source) {
    let gallery = new SimpleLightbox('.gallery a', { scrollZoom: false});
    gallery.on('show.simplelightbox', function () {
        `<div class="modal">
           <img  src="${source}" width="1280" height="800" />
        </div>`
    });
};