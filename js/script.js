export default function greeting(){
    var myName = prompt('What is your name?');

    if(!myName){
        document.getElementById('greeting').textContent = '¡Bienvenidos!';
    }
    else{
        document.getElementById('greeting').textContent = '¡Bienvenidos, ' + myName + '!';
    }
}