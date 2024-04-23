export default function buildBanner() {
    const banner = document.querySelector('#content');

    // Banner headline
    const bannerTitle = document.createElement('h1');
    bannerTitle.classList.add('headline__title');
    bannerTitle.textContent = 'Taste the Tradition, \nFeel the Passion';
    banner.appendChild(bannerTitle);

    // Banner headline paragraph
    const bannerText = document.createElement('p');
    bannerText.classList.add('headline__text');
    bannerText.textContent = `Welcome to Bella Vita Pizzeria, where every slice tells a story of tradition and passion. Our authentic recipes, passed down through generations, bring the flavors of Italy to your table. From our wood-fired pizzas with fresh, locally sourced ingredients to our handcrafted pastas and savory appetizers, every dish is a celebration of Italian culinary heritage. Join us for a dining experience that captures the essence of la dolce vita—where good food and good company come together to create unforgettable memories. Buon appetito!`;
    banner.appendChild(bannerText);

    // Banner CTA button
    const bannerButton = document.createElement('button');
    bannerButton.classList.add('headline__button');
    bannerButton.textContent = 'Make an order';
    banner.appendChild(bannerButton);
}
