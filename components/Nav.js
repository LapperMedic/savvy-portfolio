export default function Nav(state){
    var navLinks = '<div id="nav"><ul>'; // Begin the navbar

    for(let i = 0; i < state.links.length; i++){ // For each index in the navbar links array
        navLinks += `<li><a href="/${state.links[i]}">${state.links[i]}</a></li>`; // Make a li that links to that page
    }

    navLinks += '</ul></div>'; // End the navbar
    
    return navLinks;
}