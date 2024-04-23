import buildHome from './js/buildHome';
import buildMenu from './js/buildMenu';
import './styles/style.scss';

const tabBtns = document.querySelectorAll('.nav__tab-btn');
tabBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const destination = btn.dataset.nav;
        console.log(destination);

        switch (destination) {
            case 'home':
                buildHome();
                break;
            case 'menu':
                buildMenu();
                break;
            case 'about':
                buildAbout();
                break;
            default:
                break;
        }
    });
});

buildHome();
