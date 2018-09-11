import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import * as State from '../store';

var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body(state[state.active])} ${Footer()}`;
    links = document.querySelectorAll('#nav a'); // An array containing the navbar links
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', handleNav); // Add an event listener to each navbar link
    }
}

function handleNav(event){
    var newState = Object.assign({}, State); // Catch the state we currently have

    event.preventDefault(); // Don't navigate to a new page
    newState.active = event.target.textContent.toLowerCase(); // Change the state to the text within the navbar link
    render(newState); // Re-render the page
}

render(State);