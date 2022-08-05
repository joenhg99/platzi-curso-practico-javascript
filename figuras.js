// Encapsulando codigo en FUNCIONES
// Código del Cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
    
}
perimetroCuadrado()

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El Área del cuadrado es: " + areaCuadrado + " cm^2");

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const baseTriangulo = 4;
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;

// console.log("Los lados del triangulo miden: "
// + baseTriangulo + " cm, "
// + ladoTriangulo1 + " cm, "
// + ladoTriangulo2 + " cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo)

// const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
    const suma = lado1 + lado2 + base;
    return suma
}
console.log(perimetroTriangulo(5,5,4))
perimetroTriangulo(5,5,4);

// const areaTriangulo = ((baseTriangulo * alturaTriangulo)/2);
// console.log("El Área del cuadrado es: " + areaTriangulo + " cm^2");
// console.groupEnd();
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
// console.log(areaTriangulo(4,5.5))
areaTriangulo();

console.groupEnd();
// Código del círculo
console.group("Circulos");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// // Diámetro
// const diametroCirculo = radioCirculo*2;
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI );

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
console.log(perimetroCirculo(4))
perimetroCirculo();

// Área
// const areaCirculo = (radioCirculo*radioCirculo)*PI;
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

function areaCirculo(radio) {
    return (radio*radio)  * PI;
}
console.log(areaCirculo(4))

console.groupEnd();

// Interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulolado");
    const lado1 = (Number) (input.value);
    const input3 = document.getElementById("InputTriangulolado2");
    const lado2 = (Number) (input3.value);
    const input2 = document.getElementById("InputTrianguloBase");
    const base = (Number) (input2.value);
    

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulolado");
    const value = (Number) (input.value);
    const input2 = document.getElementById("InputTrianguloBase");
    const value2 = (Number) (input2.value);

    const area = areaTriangulo(value2,value);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = (Number) (input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = (Number) (input.value);

    const area = areaCirculo(value);
    alert(area);
}