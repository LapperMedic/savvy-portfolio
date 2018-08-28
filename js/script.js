var greeting = function greeting(){
    var myName = prompt('What is your name?');

    if(!myName){
        greeting();
    }
    else{
        alert('Hello, ' + myName + '!');
    }
};

var bill = {
    'type': 'restaurant',
    'items': 5,
    'total': 67.94,
    'tax': 1.12,
    'tip': 1.2,
    'paid': true
};

var fibonacci = function fibonacci(last){
    var former = 1;
    var latter = 1;
    var i = 0;
    var final = [];

    for(i = 0; i < last; i += 2){
        final[i] = former;
        final[i + 1] = latter;
        former += latter;
        latter += former;
    }

    console.log(final);
};

greeting();
fibonacci(5);
console.log('String', 1, true, undefined, null);