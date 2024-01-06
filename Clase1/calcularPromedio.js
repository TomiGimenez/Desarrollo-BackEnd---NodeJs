const calcularPromedio = (numeros) => {
    
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    let promedio = suma / numeros.length;
    
    return promedio;
};

let numeros = [12, 4, 2, 3];
let resultado = calcularPromedio(numeros);

console.log("Numeros: " + numeros);
console.log("Promedio: " + resultado);