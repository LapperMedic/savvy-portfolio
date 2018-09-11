export default function Header(state){
    return `
        <div id="header">
        <h1>${state.title}</h1>
        <h2 id="greeting">${state.subtitle}</h2>
        <p class="quote">
            <span class="bold">Personal quote:</span>
            <span class="italic">"Know thyself."</span>
        </p>
        <!--Nosce te ipsum, an ancient Greek aphorism that may have originated in ancient Egypt.-->
        </div>
        `;
}