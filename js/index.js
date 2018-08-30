import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Greeting from './script.js';

document.querySelector('#root').innerHTML = `${Nav} ${Header} ${Body} ${Footer}`;

Greeting();