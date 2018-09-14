export default function Nav(state){
    var navLinks = '<div id="nav"><ul>'; // Begin the navbar

    state.links.map((link) => { // For each link in the array
        if(link !== 'home'){
            navLinks += `<li><a href="/${link}" data-navigo>${link}</a></li>`;  // Make a li that links to it
        }
        
        else{
            navLinks += `<li><a href="/" data-navigo>${link}</a></li>`; // Unless it's 'home', then nav to root
        }
    }).join(' ');

    navLinks += '</ul></div>'; // End the navbar
    
    return navLinks;
}