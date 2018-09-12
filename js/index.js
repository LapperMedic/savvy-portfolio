import Navigo from 'navigo';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import * as State from '../store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

function render(state){
    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state[state.active])} ${Footer()}`;

    router.updatePageLinks();
}

function handleNav(activePage){
    var newState = Object.assign({}, State);

    newState.active = activePage;
    render(newState);
}

router
    .on('/:page', (params) => handleNav(params.page))
    .on('/', () => handleNav('home'))
    .resolve();