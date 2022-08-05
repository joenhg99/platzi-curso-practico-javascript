function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
  
    for (let i = 0; i < lista.length; i++) {
      sumaLista = sumaLista + lista[i];
    }
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

const lista = [
    700,
    600,
    100,
    200,
    500,
    400000000,
];
lista.sort((a, b) => a - b)
const mitadLista = parseInt(lista.length / 2);

console.log(lista)

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false; 
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista-1];
    const elemento2 = lista[mitadLista];

    const promedio = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedio;

} else {
    mediana = lista[mitadLista];
}

// console.log(lista[mitadLista-1], lista[mitadLista], mediana)