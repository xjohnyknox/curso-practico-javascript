// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cms");

function perimetroCuadrado(lado) {
    return lado *4;    
}    

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");

function areaCuadrado(lado) { // (lado) es el PARAMETRO de la funcion
    return lado * lado;    
}    
// Cuando la llamo, por ejemplo:
// areaCuadrado(50); el 50 seria el ARGUMENTO


console.groupEnd();
// Código del triangulo
console.group("Triángulos");

// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// const alturaTriangulo2 = Math.sqrt((baseTriangulo/2) * * 2 + ladoTriangulo1 * * 2);

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 
//     + "cms, "
//     +ladoTriangulo2 
//     + "cms, "
//     +baseTriangulo 
//     + "cms"
// );

//console.log("La altura del triángulo es: " + alturaTriangulo + "cms");

//const perimetroTriangulo = ladoCuadrado + ladoTriangulo1 + baseTriangulo;
//console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cms");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;    
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo)/ 2;
//console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");

function areaTriangulo(base,altura) {
    return (base * altura)/ 2;     
}
console.groupEnd();
// Código del círculo
console.group("Círculo");


//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cms");

//const diametroCirculo = radioCirculo*2;
//console.log("El diámetro del círculo es: " + diametroCirculo + "cms");

function diametroCirculo(radio) {
    return radio * 2;        
}
const PI = Math.PI
console.log("PI es:" + PI);

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cms");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//const areaCirculo = (radioCirculo^2)*PI; 
//console.log("El área del círculo es: " + areaCirculo + " cms^2");
function areaCirculo(radio) {
    return radio * radio * PI;
}
