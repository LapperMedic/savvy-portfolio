export default function greeting(){
    var myName = prompt('What is your name?');

    if(!myName){
        document.getElementById('greeting').innerHTML = '¡Bienvenidos!';
    }
    else{
        document.getElementById('greeting').innerHTML = `¡Bienvenidos, ${myName}!`;
    }
}