
/* Creo un ciclo for che iteri da 1 a 100
*  inserisco poi tanti if quante le condizioni
*  divisibile per 3, per 5 e per entrambi
*/

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if ( i % 3 == 0 ){
        console.log("Fizz");
    } else if ( i % 5 == 0 ){
        console.log("Buzz");
    } else{
        console.log(i);        
    }
}