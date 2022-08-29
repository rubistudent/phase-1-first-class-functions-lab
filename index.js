// Code your solution in this file!
function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
   return function hello(){
   }
}

function returnsAnAnonymousFunction(){

   return function(){

   }
}