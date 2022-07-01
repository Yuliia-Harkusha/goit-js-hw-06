// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');

const body = document.querySelector('body');

const colorValue = document.querySelector('.color');

button.addEventListener("click", changeBgColor);

function changeBgColor(event) {
   body.style.backgroundColor = getRandomHexColor();

  return colorValue.textContent = getRandomHexColor();
};