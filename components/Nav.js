export default function Nav(state){
    return `
        <div id="nav">
            <ul>
            <li>
                <a href="/${state.links[0]}">${state.links[0]}</a>
            </li>
            <li>
                <a href="/${state.links[1]}">${state.links[1]}</a>
            </li>
            <li>
                <a href="/${state.links[2]}">${state.links[2]}</a>
            </li>
            </ul>
        </div>
        `;
}