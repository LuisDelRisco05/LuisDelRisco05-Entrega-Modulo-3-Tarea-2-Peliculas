import getMovies from "./api/getAPI.js";


const carousel = document.querySelector('#carousel');
const sectionDos = document.querySelector('.container-secc2');
const modalHeader = document.querySelector('.modal-header');
const btnClose = document.querySelector('#btn-close');
const modalBody = document.querySelector('.modal-body');
const fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    getMovies();
});

// function que recibe los datos
export const moviesData = ([id, title, poster, overview, backdrop]) => {
    
    let mostrar = false;
    const urlImage = `https://image.tmdb.org/t/p/w500${poster}`;
    const miniPortada = `https://image.tmdb.org/t/p/w500${backdrop}`;

    const divImg = document.createElement("div");
    divImg.setAttribute("class","carousel-item");
    divImg.setAttribute("id", id);
    carousel.appendChild(divImg);


    const btnModal = document.createElement('button');
    btnModal.setAttribute("type", "button");
    btnModal.setAttribute("data-bs-toggle", "modal");
    btnModal.setAttribute("data-bs-target", "#staticBackdrop");
    btnModal.classList = "btnModal btn bg-dark bg-gradient";
    divImg.appendChild(btnModal);

    btnModal.addEventListener('click', () => {
        const titleModal = document.createElement('h5');
        titleModal.classList = "modal-title";
        titleModal.setAttribute("id", "staticBackdropLabel")
        titleModal.textContent= title;
        modalHeader.appendChild(titleModal);
        console.log(id);


        const divBodyModal = document.createElement('div');
        divBodyModal.classList = 'container bg-light text-justify';
        divBodyModal.setAttribute("id", "mini-portada");
     
        const imgMini = document.createElement('img');
        imgMini.setAttribute("src", miniPortada);
        imgMini.setAttribute("alt", title);
        imgMini.setAttribute("style",  "height: 250px");
        imgMini.classList = "rounded-3"

        const modalDescripcion = document.createElement('p');
        modalDescripcion.textContent = overview;
        
        modalBody.appendChild(divBodyModal);
        divBodyModal.appendChild(imgMini);
        divBodyModal.appendChild(modalDescripcion);

        

        
    })

    btnClose.addEventListener('click' , () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    })


    

    const img = document.createElement("img");
    img.setAttribute("src", urlImage);
    img.setAttribute("alt", title);
    img.classList = "edit";
    btnModal.appendChild(img);


    const divSeccTres = document.createElement('div');
    divSeccTres.classList="col-3";
    fragment.appendChild(divSeccTres);


    const imgSeccDos = document.createElement('img');
    imgSeccDos.setAttribute("src", urlImage);
    imgSeccDos.classList = "w-75 h-75 shadow";
    divSeccTres.appendChild(imgSeccDos);

    sectionDos.appendChild(fragment);

    
};
