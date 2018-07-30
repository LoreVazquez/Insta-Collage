'use strict'

//Funciones de drag and drop
const dragInitial = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
};

const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
};

const onDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    let pic = document.getElementById(data)
    e.target.appendChild(pic);
    pic.removeAttribute('class', 'size');
    pic.setAttribute('class', 'size-collage')

};

//Evento para agregar fotos
const addPicture = (e) => {
    let file = e.target.files[0];
    let image = document.createElement('img');

    source.appendChild(image);
    image.setAttribute('src', URL.createObjectURL(file));
    image.setAttribute('id', file.name);
    image.setAttribute('class', 'size');
    image.setAttribute('crossOrigin', 'Anonymous');

    let id = image.id;
    let newPic = document.getElementById(id);

    //Inizializa la función de arrastrar
    newPic.addEventListener('dragstart', dragInitial);
};

const selectTemplate = () => {

}

const deleteItem = () => {
    let element = document.getElementById('myCanvas');
    element.parentNode.removeChild(element);
};

//Evento para convertir el contenedor del collage en un canvas
$("#btn-Preview-Image").on('click', function() {
    html2canvas($("#html-content-holder")[0]).then(function(canvas) {
        $("#previewImage").append(canvas);
        $('canvas').attr('id', "myCanvas")
    });
});

//Evento para descargar canvas en una imagen
$("#btn-Convert-Html2Image").on('click', function() {
    let canvas = ($('#myCanvas')[0])
    let imageData = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    $("#btn-Convert-Html2Image").attr("download", "collage.png")
    $("#btn-Convert-Html2Image").attr("href", imageData);
});

// Declaración de eventos
const init = () => {
    let container = document.getElementById("html-content-holder");
    let source = document.getElementById('source');
    let inputFile = document.getElementById('inputFile');
    let deleteCollage = document.getElementById('deleteCollage');
    let template = document.getElementById('template');

    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', onDrop);

    source.addEventListener('dragover', dragOver);
    source.addEventListener('drop', onDrop);

    inputFile.addEventListener('change', addPicture);
    deleteCollage.addEventListener('click', deleteItem);
    template.addEventListener('change', selectTemplate)
};

window.addEventListener('load', init);