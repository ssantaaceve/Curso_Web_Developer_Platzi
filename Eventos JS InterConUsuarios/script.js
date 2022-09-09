const PrimerCalculo = document.querySelector('#calculo1');
const SegundoCalculo = document.getElementById('calculo2');
const producto = document.getElementById ('resultado');



function SumarProductos () {
    
    const Sumafinal = parseInt(PrimerCalculo.value) + parseInt(SegundoCalculo.value);
    producto.innerHTML = 'El resultado es' + ' ' + Sumafinal;
}