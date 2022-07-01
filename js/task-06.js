// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const inputText = document.querySelector("#validation-input");

function lengthCheck(event) {
    if (event.currentTarget.value.length === +inputText.dataset.length) {
        inputText.classList.remove("invalid");
        return inputText.classList.add("valid");
    }
        inputText.classList.remove("valid");
        return inputText.classList.add("invalid");
};

inputText.addEventListener("blur", lengthCheck);
