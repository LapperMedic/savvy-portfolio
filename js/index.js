import Navigo from 'navigo';
import Axios from 'axios';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
// import Greeter from '../components/Greeter';
import store from '../store/store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
// var greeter = new Greeter(store.dispatch.bind(store));

function render(){
    var state = store.getState();

    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state)} ${Footer()}`;
    // greeter.render(root);
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

Axios
    .get('https://api.openweathermap.org/data/2.5/weather?zip=63132&appid=ccbecae1c61586fff5a31b9a9e42b137')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;
            
            return state;
        });
    });

Axios
    .get('https://api.github.com/users/lappermedic/repos', {
        'headers': {
            'Authorization': `token ${process.env.GITHUB_API_KEY}`
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });

store.addListeners(render);