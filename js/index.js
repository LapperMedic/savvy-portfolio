import Navigo from 'navigo';
import Axios from 'axios';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import * as State from '../store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var store;

class Store{
    constructor(state){
        this.state = Object.assign({}, state);
        this.listeners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);
        this.listeners.forEach((listener) => listener());
    }

    getState(){
        return this.state;
    }

    addListeners(listener){
        this.listeners.push(listener);
    }
}

store = new Store(State);

function render(){
    var state = store.getState();

    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state)} ${Footer()}`;
    router.updatePageLinks();
}

function handleNav(activePage){
    store.dispatch((state) => {
        state.active = activePage;
        
        return state;
    });
}

router
    .on('/:page', (params) => handleNav(params.page))
    .on('/', () => handleNav('home'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => {
            state.posts = response.data;
            
            return state;
        });
    });

store.addListeners(render);