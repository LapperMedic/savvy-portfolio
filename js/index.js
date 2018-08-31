import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Greeting from './script.js';

var state = {
    'nav': '',
    'header': 'Alex Lapp',
    'body': '',
    'footer': ''
};

document.querySelector('#root').innerHTML = `${Nav()} ${Header(state)} ${Body()} ${Footer()}`;

Greeting();