var rbOfertas = document.getElementById("receberOfertas");
var formOfertas = document.querySelector(".form-ofertas");


function mostrarArea() {
  if (rbOfertas.checked) {
    formOfertas.classList.remove("desaparecendo");
    formOfertas.classList.add("aparecendo");
  } else {
    formOfertas.classList.remove("aparecendo");
    formOfertas.classList.add("desaparecendo");
  }
  console.log(rbOfertas.checked);
}
rbOfertas.addEventListener("change", mostrarArea);
