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
    e.target.appendChild(document.getElementById(data));
};

const addPicture = (e) => {
    let file = e.target.files[0];
    let image = document.createElement('img');

    source.appendChild(image);
    image.setAttribute('src', URL.createObjectURL(file));
    image.setAttribute('id', file.name)
    image.setAttribute('class', 'size')

    let id = image.id;
    let newPic = document.getElementById(id);

    newPic.addEventListener('dragstart', dragInitial);
};

const init = () => {
    let container = document.getElementById("container");
    let source = document.getElementById('source');
    let inputFile = document.getElementById('inputFile')

    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', onDrop);

    source.addEventListener('dragover', dragOver);
    source.addEventListener('drop', onDrop);

    inputFile.addEventListener('change', addPicture);
};

window.addEventListener('load', init);