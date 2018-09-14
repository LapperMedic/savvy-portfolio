import Navigo from 'navigo';
import Axios from 'axios';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import * as State from '../store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);

function render(state){
    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state)} ${Footer()}`;

    router.updatePageLinks();
}

function handleNav(activePage){
    newState.active = activePage;
    render(newState);
}

router
    .on('/:page', (params) => handleNav(params.page))
    .on('/', () => handleNav('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;
        render(newState);
    });