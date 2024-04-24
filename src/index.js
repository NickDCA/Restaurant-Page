import buildContact from './js/buildContact';
import buildHome from './js/buildHome';
import buildMenu from './js/buildMenu';
import './styles/style.scss';

const tabBtns = document.querySelectorAll('.nav__tab-btn');
tabBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const destination = btn.dataset.nav;
        console.log(destination);

        document
            .querySelector('.nav__tab-btn--selected')
            .classList.toggle('nav__tab-btn--selected');
        btn.classList.add('nav__tab-btn--selected');

        switch (destination) {
            case 'home':
                buildHome();
                break;
            case 'menu':
                buildMenu();
                break;
            case 'contact':
                buildContact();
                break;
            default:
                break;
        }
    });
});

buildHome();
