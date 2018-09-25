import {
    capitalize,
    kebabCase
} from 'lodash';

function Repo(repo){
    return `
        <li>
            <a href="${repo.html_url}">
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
    `;
}