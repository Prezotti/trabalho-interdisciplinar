var rbOfertas = document.getElementById("receberOfertas");
var formOfertas = document.querySelector(".form-ofertas");


function mostrarArea() {
  if (rbOfertas.checked) {
    formOfertas.style.display = "block"
  } else {
    formOfertas.style.display = "none"
  }
}
rbOfertas.addEventListener("change", mostrarArea);