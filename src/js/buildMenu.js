import margherita from '../assets/pizzas/margherita.webp';
import Menu from '../menu.json';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../assets/pizzas', false, /\.webp$/));
console.table(images);

export default function buildMenu() {
    const menu = document.querySelector('#content');
    menu.innerHTML = '';

    const pizzaCardsList = document.createElement('ul');
    pizzaCardsList.classList.add('pizza-cards__container');

    const pizzas = Menu.pizzas;
    pizzas.forEach(({ title, description, price }) => {
        const imageKey = title.toLowerCase().replace(' ', '-');
        console.log(imageKey);
        console.log(images[`${imageKey}.webp`]);
        const pizzaCard = document.createElement('li');
        pizzaCard.classList.add('pizza-card');
        // <img url="" alt="${description}" />
        pizzaCard.innerHTML = `
            <img src="${images[`${imageKey}.webp`]}" class="pizza-card__img">
            <h3 class="pizza-card__title">${title}</h3>
            <p class="pizza-card__description">${description}</p>
            <p class="pizza-card__price">$${price}</p>
            <button class="pizza-card__button">Order</button>
        `;
        pizzaCardsList.appendChild(pizzaCard);
    });

    menu.appendChild(pizzaCardsList);
}
