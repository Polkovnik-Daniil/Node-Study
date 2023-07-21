function displaySync(callback){
    callback();
}
 
console.log("Начало работы программы");
 
setTimeout(function(){
         
        console.log("timeout 500");
}, 510);
 
setTimeout(function(){
         
        console.log("timeout 100");
}, 503);
 
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");