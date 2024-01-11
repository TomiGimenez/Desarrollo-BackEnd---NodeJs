const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

let intento = 1;
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log("Felicitaciones, adivinaste el número secreto!");
        console.log(`Lo lograste en el intento: ${intento}`);
    } else if (numeroAdivinado > numeroSecreto) {
        console.log(`El numero secreto es menor. Sigue intentando! Este fue el intento nro: ${intento}`);
        intento++;
    } else {
        console.log(`El numero secreto es mayor. Sigue intentando! Este fue el intento nro: ${intento}`);
        intento++;
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};