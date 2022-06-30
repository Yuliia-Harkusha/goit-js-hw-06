// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const list = document.querySelector('#categories');

// console.dir(list);

const numberOfCategories = list.children.length;

console.log("Number of categories:", numberOfCategories);


const items = document.querySelectorAll('.item');

const categoryName = items.forEach((item) => {
    return console.log(`Category: ${item.firstElementChild.textContent}`,`Elements:${item.children[1].childElementCount}`);
});
