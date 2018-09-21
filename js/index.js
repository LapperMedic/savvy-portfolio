import Navigo from 'navigo';
import Axios from 'axios';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Greeter from '../components/Greeter';
import store from '../store/store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));

function render(){
    var state = store.getState();

    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state)} ${Footer()}`;
    greeter.render(root);
    router.updatePageLinks();
}

function handleNav(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}

router
    .on('/:page', (params) => handleNav(params.page))
    .on('/', () => handleNav('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'posts': response.data }));
    });

store.addListeners(render);