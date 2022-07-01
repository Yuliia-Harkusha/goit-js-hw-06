// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const range = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

function changeTextSize(event) {
    text.style.fontSize = `${range.value}px`;
    
};

range.addEventListener('input', changeTextSize);