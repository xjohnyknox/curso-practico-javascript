// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cms");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");

console.groupEnd();
// Código del triangulo
console.group("Triángulos");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const alturaTriangulo2 = Math.sqrt((baseTriangulo/2) * * 2 + ladoTriangulo1 * * 2);

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 
    + "cms, "
    +ladoTriangulo2 
    + "cms, "
    +baseTriangulo 
    + "cms"
);

console.log("La altura del triángulo es: " + alturaTriangulo + "cms");

const perimetroTriangulo = ladoCuadrado + ladoTriangulo1 + baseTriangulo;
console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cms");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/ 2;
console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");


console.groupEnd();
// Código del círculo
console.group("Círculo");


const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cms");

const diametroCirculo = radioCirculo*2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cms");

const PI = Math.PI
console.log("PI es:" + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cms");
const areaCirculo = (radioCirculo^2)*PI; 
console.log("El área del círculo es: " + areaCirculo + " cms^2");