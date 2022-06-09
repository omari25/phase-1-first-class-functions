const receivesAFunction = callback => callback();

function returnsANamedFunction(){
    return function func(){};
}

function returnsAnAnonymousFunction(){
    return () => {};
}