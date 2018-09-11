import * as Pages from './pages';

export default function Body(state){
    return `<div id="body">${Pages[state.content]}</body>`;
}