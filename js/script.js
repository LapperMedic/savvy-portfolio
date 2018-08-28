var greeting = function greeting(){
    var myName = prompt('What is your name?');

    if(!myName){
        greeting();
    }
    else{
        alert('Hello, ' + myName + '!');
    }
};

var fibonacci = function fibonacci(last){
    var former = 1;
    var latter = 1;
    var i;

    for(i = 0; i <= last; i++){
        console.log(former, latter);
        former += latter;
        latter += former;
    }
};

greeting();