import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Greeting from './script.js';

var state = {
    'header': 'Alex Lapp'
};

document.querySelector('#root').innerHTML = `${Nav()} ${Header(state)} ${Body()} ${Footer()}`;

Greeting();

document.querySelectorAll('h1')[0].addEventListener('click', (event) => {
    if(event.target.textContent == state.header){
        event.target.textContent = 'OH BOI';
    }
    else{
        event.target.textContent = state.header;
    }
});