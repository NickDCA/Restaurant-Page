import Logo from '../assets/pizza-logo.svg';
import buildMenu from './buildMenu';

export default function buildHome() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const home = document.createElement('section');
    home.classList.add('home__container');
    content.appendChild(home);

    // home LOGO
    const homeLogo = document.createElement('div');
    homeLogo.classList.add('headline__logo');
    homeLogo.innerHTML = `
        <img alt="logo" src="${Logo}">
        <h1>BELLA VITA</h1>
        
    `;
    home.appendChild(homeLogo);

    // home headline
    const homeTitle = document.createElement('h2');
    homeTitle.classList.add('headline__title');
    homeTitle.textContent = 'Taste the Tradition, \nFeel the Passion';
    home.appendChild(homeTitle);

    // home headline paragraph
    const homeText = document.createElement('p');
    homeText.classList.add('headline__text');
    homeText.textContent = `Welcome to Bella Vita Pizzeria, where every slice tells a story of tradition and passion. Our authentic recipes, passed down through generations, bring the flavors of Italy to your table. From our wood-fired pizzas with fresh, locally sourced ingredients to our handcrafted pastas and savory appetizers, every dish is a celebration of Italian culinary heritage. Join us for a dining experience that captures the essence of la dolce vita—where good food and good company come together to create unforgettable memories. Buon appetito!`;
    home.appendChild(homeText);

    // home CTA button
    const homeButton = document.createElement('button');
    homeButton.classList.add('headline__button');
    homeButton.textContent = 'Make an order';
    homeButton.addEventListener('click', (e) => {
        document
            .querySelector('.nav__tab-btn--selected')
            .classList.toggle('nav__tab-btn--selected');
        document
            .querySelector('[data-nav=menu]')
            .classList.add('nav__tab-btn--selected');
        buildMenu();
    });
    home.appendChild(homeButton);
}
