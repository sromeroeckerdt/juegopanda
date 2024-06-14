
const WIDTH = 700;
const HEIGHT = 450;
const X = 570;
const Y = 175; 

let target = {
    x: (X) ,
    y: (Y)
}
console.log(target);

let $map = document.getElementById('mapa');
let $distancia = document.getElementById('distancia');

$map.addEventListener('click', function (e) {
    let distance = getDistance(e, target); 
    let distanceHint = getDistanceHint(distance); 
    $distancia.innerHTML = distanceHint; 
    console.log(distance)

})
