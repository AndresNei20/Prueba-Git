//Sacar el promedio acumulado

let materia1 = 4.3;
let creditos1= 3;

let materia2 = 3.8;
let creditos2 = 4;

let materia3 = 2.5;
let creditos3 = 3;

let materia4 = 3.6;
let creditos4 = 2;

let numerador = (materia1*creditos1)
                    +(materia2*creditos2)
                    +(materia3*creditos3)
                    +(materia4*creditos4);

let denominador = (creditos1+creditos2+creditos3+creditos4)

let promedioAcumulado = numerador / denominador;
alert(`El promedio acumulado es ${promedioAcumulado}`)

//COMPARACIONES

let alfa = 10;
let beta = 110;

console.log(alfa === beta);
console.log(alfa !== beta);
console.log(alfa > beta);
console.log( alfa >= beta );
console.log( alfa < beta );
console.log( alfa <= beta );

let comp = alfa === beta;

let gamma = `Fundamentos`;
let delta = `Fundamentos`;

console.log( gamma === delta);
console.log( gamma !== delta);

