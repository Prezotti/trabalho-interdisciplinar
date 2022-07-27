var rbOfertas = document.getElementById("receberOfertas");
var formOfertas = document.querySelector(".form-ofertas");

// Function para fazer aparecer e desaparecer a area de ofertas na pagina contato
function mostrarArea() {

  if (rbOfertas.checked) {  
    formOfertas.style.display = "block"
  } else {
    formOfertas.style.display = "none"
  }
  console.log(rbOfertas.checked);
}
rbOfertas.addEventListener("change", mostrarArea);
