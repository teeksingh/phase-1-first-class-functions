function receivesAFunction(callback) {
    console.log(callback())
}

function returnsANamedFunction(){
    console.log(`Hello`)
    return returnsANamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){console.log(`Wicked`)}
}