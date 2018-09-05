export default function Header(state){
    return `
        <div id="header">
        <h1>${state.title}</h1>
        <h2 id="greeting">My Video R&eacute;sum&eacute;
            <small>(<a href="https://www.dropbox.com/s/zhzqd3wdt29fxgp/CV%20of%20Alex%20Lapp.pdf?dl=0&amp;m=">not really</a>)</small>
        </h2>
        <p class="quote">
            <span class="bold">Personal quote:</span>
            <span class="italic">"Know thyself."</span>
        </p>
        <!--Nosce te ipsum, an ancient Greek aphorism that may have originated in ancient Egypt.-->
        </div>
        `;
}