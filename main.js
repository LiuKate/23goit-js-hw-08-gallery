import products from './gallery-items.js';

// console.log(createGalleryItemsMarkup(products));

const galleryRef = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryItemsMarkup(products);

function createGalleryItemsMarkup(products) {

    return products.map(product => {
        return `
            <li class="gallery__item" >
                <a class="gallery__link" href = "${product.original}" >
                   <img class="gallery__image"
                    src="${product.preview}"
                    data-source="${product.original}"
                    alt="${product.description}" />
                </a >
            </li >
        `; 
    }).join('');
    
}

const modalLightboxRef = document.querySelector('.js-lightbox');
const ligthboxImageRef = document.querySelector('.lightbox__image');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemMarkup);

galleryRef.addEventListener('click', onGalleryItemClick);


function onGalleryItemClick(event) {

    event.preventDefault();

    const imageEl = event.target;
    
    if ( !imageEl.classList.contains('gallery__image')) {
        return;
    }
       
    modalLightboxRef.classList.add('is-open');

    imageEl.dataset.source;
    
   ligthboxImageRef.src = imageEl.dataset.source;
   ligthboxImageRef.alt = imageEl.alt;
     
}

const closeLightboxBtnRef = document.querySelector('[data-action="close-lightbox"]');

closeLightboxBtnRef.addEventListener('click', onLightboxCloseByBtn)

function onLightboxCloseByBtn(event) {
    modalLightboxRef.classList.remove('is-open');

    ligthboxImageRef.src = "";
    ligthboxImageRef.alt = "";
}



