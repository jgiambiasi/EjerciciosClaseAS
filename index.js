//clusure suma
function creaSumador(x){
    console.log('esta recibiendo x = '+ x);
    return function (y){
        console.log('esta recibiendo y = '+ y);
        return x + y;
    }

}
var sumaEnCLusure = creaSumador(5);
console.log(sumaEnCLusure(2));
console.log(sumaEnCLusure(3));