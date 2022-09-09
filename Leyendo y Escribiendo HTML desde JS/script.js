const h1 = document.querySelector("h1");
const Parrafito = document.querySelector(".Parrafito");
const Varimg = document.getElementById("123");
const p = document.querySelector("p");
const input = document.querySelector("input");

console.log(p);
//Con esta propiedad podemos modificar el HTML desde JS
h1.innerHTML = "Patito";
h1.innerText = "Sergio";

//Darle clase al elemento html
console.log(h1.getAttribute('class'));//nos ayuda a leer el atributo
h1.setAttribute('class', 'rojo'); //nos ayuda a modificar las clases

h1.classList.add('rojo'); //Agregar clases
h1.classList.remove('verde'); //Eliminar clases

input.value = '456';

//Cómo crear un elemento desde cero
const img = document.createElement('img');
img.setAttribute('src', '/Curso_Web_Developer_Platzi/Leyendo y Escribiendo HTML desde JS/Images/Platzi.jpg');
Varimg.append(img);
