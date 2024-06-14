
let getRandomNumber = size => {
    return Math.floor(Math.random() * size); 
}
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
} 

let getDistanceHint = distance => {
    if (distance < 20){
        Swal.fire({
            title: "¡Encontraste el Panda!",
            text: "Este pacífico animal que se conoce por su pelaje blanco y negro es considerado un tesoro nacional en China. Los pandas viven principalmente en bosques de bambú, en lo alto de las montañas del oeste de China, alimento del que subsisten casi por completo. Deben comer entre 12 y 38 kilogramos de bambú cada día.",
            imageUrl: "https://store-images.s-microsoft.com/image/apps.33713.14403266395963549.251bd55f-0d82-470c-8252-49c4239f9962.cb8a0a60-bf47-446d-bfd7-655d02ae0784?h=576",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Panda Gigante"
          })}
    if (distance < 30) {
        return "¡Vos pódes!";
    } else if (distance < 40) {
        return "¡Estás cerca!";
    } else if (distance < 60) {
        return  "Te estás acercando";
    } else if (distance < 100) {
        return "¡Estás un poco lejos!";
    } else if (distance < 180) {
        return "¡Podes hacerlo, intentalo otra vez!";
    } else if (distance < 360) {
        return "¡Definitivamente ahí no!";
    } else {
        return "¡Estás muy lejos!";
    }
}