var boxes = document.querySelectorAll('.box');
var cores = document.querySelectorAll('.cor');
var container = document.querySelector('#container');
for (var i = 0; i < cores.length; i++) {

    cores[i].onclick = function () {

        var cor = getComputedStyle(this).backgroundColor;

        for (var j = 0; j < boxes.length; j++) {
            boxes[j].style.backgroundColor = cor;
        }

    };

}
var tamanho = document.querySelector("#tamanho");

tamanho.oninput = function () {

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.width = tamanho.value + "px";
        boxes[i].style.height = tamanho.value + "px";
    }

};
document.querySelector("#quadrado").onclick = function () {

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = "0";
    }

};

document.querySelector("#circulo").onclick = function () {

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = "50%";
    }

};
var direction = document.querySelector("#direction");
var justify = document.querySelector("#justify");
var align = document.querySelector("#align");

direction.onchange = function () {
    container.style.flexDirection = direction.value;
};

justify.onchange = function () {
    container.style.justifyContent = justify.value;
};

align.onchange = function () {
    container.style.alignItems = align.value;
};