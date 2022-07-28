/*
Autores: Henrique Galvão, Paulo Cezar Borges, Samir Coutinho Borges
Data: 28/07/2022
Descrição: Javascript da página de contato.
*/
var rbOfertas = document.getElementById("receberOfertas");
var formOfertas = document.querySelector(".form-ofertas");
formOfertas.style.display = "none"

// Function para fazer aparecer e desaparecer a area de ofertas na pagina contato
function mostrarArea() {
console.log(rbOfertas.checked)
  if (rbOfertas.checked) {  
    formOfertas.style.display = "block"
  } else {
    formOfertas.style.display = "none"
  }
}
rbOfertas.addEventListener("change", mostrarArea);
