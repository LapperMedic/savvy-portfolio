export default function Nav(state){
    var navLinks = '<div id="nav"><ul>'; // Begin the navbar

    for(let i = 0; i < state.links.length; i++){ // For each index in the navbar links array
        if(state.links[i] !== 'home'){ // Make a li that links to it
            navLinks += `<li><a href="/${state.links[i]}" data-navigo>${state.links[i]}</a></li>`;
        }
        
        else{
            navLinks += `<li><a href="/" data-navigo>${state.links[i]}</a></li>`;
        }
    }

    navLinks += '</ul></div>'; // End the navbar
    
    return navLinks;
}