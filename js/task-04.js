// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const result = document.querySelector("#value");

let counterValue = 0;

const decrButton = document.querySelector('button[data-action="decrement"]');

const incrButton = document.querySelector('button[data-action="increment"]');

function decrement() {
    counterValue -= 1;
    result.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    result.textContent = counterValue;
}

decrButton.addEventListener("click", decrement);

incrButton.addEventListener("click", increment);
