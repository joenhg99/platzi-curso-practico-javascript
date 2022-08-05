// const lista = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2, 
//     2,
//     2,
//     1,
// ];

const listaCount = {};

/* Contar el número de veces que aparece cada elemento en la lista. */
lista.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    }
)

// console.log(listaCount)

/* Ordenar el objeto listaCount por el número de veces que aparece cada elemento en la lista. */
const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
)

const moda = listaArray[listaArray.length - 1];
console.log(moda)


function formulaModa(lista) {
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    )
    
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    )
    
    const moda = listaArray[listaArray.length - 1];
    return moda[0];
}

function calcularModa() {
    let numeros = document.getElementById("inputModa");
    let numero = numeros.value;

    let valueArray = Array.from(numero.split(','),Number);
    let moda = formulaModa(valueArray);

    const resultP=document.getElementById("ResultP");
    resultP.innerText="La moda es: "+moda;
    console.log(moda)
}