const sum1 = document.getElementById ('suma1');
const sum2 = document.getElementById ('suma2');
const rest1 = document.getElementById ('resta1');
const rest2 = document.getElementById ('resta2');
const div1 = document.getElementById ('division1');
const div2 = document.getElementById ('division2');
const multi1 = document.getElementById ('multiplicacion1');
const multi2 = document.getElementById ('multiplicacion2');

const ResultSuma = document.getElementById ('ProductoSuma'); 
const ResultResta = document.getElementById ('ProductoResta'); 
const ResultDivision = document.getElementById ('ProductoDivision'); 
const ResultMultiplicacion = document.getElementById ('Productomultiplicador'); 


function SumandoValores () {
    operacionsuma = parseInt(sum1.value) + parseInt(sum2.value);
    ResultSuma.innerHTML = "La suma es igual a " + operacionsuma; 
}

function RestaValores () {
    operacionresta = parseInt(rest1.value) - parseInt(rest2.value);
    ResultResta.innerHTML = "La resta es igual a " + operacionresta; 
}

function DivisionValores () {
    operaciondivision = parseInt(div1.value) / parseInt(div2.value);
    ResultDivision.innerHTML = "La división es igual a " + operaciondivision; 
}

function MultiplicadorValores () {
    operacionmultiplicador = parseInt(multi1.value) * parseInt(multi2.value);
    ResultMultiplicacion.innerHTML = "La multiplicación es igual a " + operacionmultiplicador; 
}