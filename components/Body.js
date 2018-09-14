import * as Pages from './pages';

export default function Body(state){
    const page = state[state.active];

    return `<div id="body">${Pages[page.content](state.posts)}</body>`;
}