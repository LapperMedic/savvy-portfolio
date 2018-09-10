import Nav from '../components/Nav';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
// import Greeting from './script.js';

var State = {
    'active': 'home',
    'home': {
        'title': 'Alex Lapp',
        'links': [ 'blog', 'projects', 'contact' ]
    },
    'blog': {
        'title': 'Blog',
        'links': [ 'home', 'projects', 'contact' ]
    },
    'projects': {
        'title': 'Projects',
        'links': [ 'home', 'blog', 'contact' ]
    },
    'contact': {
        'title': 'Contact',
        'links': [ 'home', 'blog', 'projects' ]
    }
};

var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = `${Nav(state[state.active])} ${Header(state[state.active])} ${Body()} ${Footer()}`;
    links = document.querySelectorAll('#nav a'); // An array containing the navbar links
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', handleNav); // Add an event listener to each navbar link
    }
}

function handleNav(event){
    var newState = State; // Catch the state we currently have

    event.preventDefault(); // Don't navigate to a new page
    newState.active = event.target.textContent.toLowerCase(); // Change the state to the text within the navbar link
    render(newState); // Re-render the page
}

render(State);
// Greeting();

// document.querySelectorAll('h1')[0].addEventListener('dblclick', (event) => {
//     if(event.target.textContent == State.home.title){
//         event.preventDefault();
//         event.target.textContent = 'OH BOI';
//         console.log(event.target.textContent);
//     }
//     else{
//         event.preventDefault();
//         event.target.textContent = State.home.title;
//         console.log(event.target.textContent);
//     }
// });