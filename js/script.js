var greeting = function greeting(){
    var myName = prompt('What is your name?');

    if(!myName){
        greeting();
    }
    else{
        document.querySelectorAll('h2')[0].innerHTML = `¡Bienvenidos, ${myName}!`;
    }
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

var homework = function homework(){
    var string = 'String';
    var number = 1;
    var boolean = true;
    var undef;
    var nul = null;
    var exampleArray = [ string, number, boolean, undef, nul ];

    var bill = {
        'type': 'restaurant',
        'total': 67.94,
        'paid': true,
        'location': undefined,
        'refund': null
    };

    var car = {
        'make': 'Pontiac',
        'model': 'G6',
        'year': 2008,
        'color': 'grey',
        'plates': 'LAPPER',
        'miles': '141000'
    };

    console.log(exampleArray, bill, car);
};

greeting();
fibonacci(5);
homework();