import { capitalize, kebabCase } from 'lodash';
import Weather from '../Weather';

function Repo(repo){
    return `
        <li>
            <a href="${repo.html_url}" target="_blank">
                ${kebabCase(repo.name).split('-').map(capitalize).join(' ')}
            </a>
        </li>
    `;
}

export default function Projects(state){
    var repos = state.repos.map(Repo).join('');

    return `
        <h3>Projects</h3>
        <ul>
            ${repos}
        </ul>
        <h3>Weather</h3>
        ${Weather(state.weather)}
    `;
}