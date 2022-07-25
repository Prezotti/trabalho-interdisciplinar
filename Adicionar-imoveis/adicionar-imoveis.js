var inCidade = document.getElementById("inCidade");
var inRua = document.getElementById("inRua");
var inNumero = document.getElementById("inNumero");
var inCep = document.getElementById("inCep");
var inBairro = document.getElementById("inBairro");
var rbApartamento = document.getElementById("rbApartamento");
var rbCasa = document.getElementById("rbCasa");
var rbSitio = document.getElementById("rbSitio");
var rbDuplex = document.getElementById("rbDuplex");
var rbTerreno = document.getElementById("rbTerreno");
var rbLoja = document.getElementById("rbLoja");
var inAreaConstruida = document.getElementById("inAreaConstruida");
var inAreaTotal = document.getElementById("inAreaTotal");
var btAdicionar = document.getElementById("btAdicionar");

// var cidades = [];
// var bairros = [];
// var logradouros = [];
// var tipos = [];
// var ceps = [];
// var areasC = [];
// var areasT = [];
// var numeros = [];
// var ruas = [];

var cidades = localStorage.cidades.split(",");
var bairros = localStorage.bairros.split(",");
var tipos = localStorage.tipos.split(",");
var ceps = localStorage.ceps.split(",");
var areasC = localStorage.areasC.split(",");
var areasT = localStorage.areasT.split(",");
var numeros = localStorage.numeros.split(",");
var ruas = localStorage.ruas.split(",");

function adicionarImovel() {

  var ehApartamento = rbApartamento.checked;
  var ehCasa = rbCasa.checked;
  var ehSitio = rbSitio.checked;
  var ehDuplex = rbDuplex.checked;
  var ehTerreno = rbTerreno.checked;

  cidades.push(inCidade.value);
  ceps.push(inCep.value);
  bairros.push(inBairro.value);
  areasC.push(inAreaConstruida.value);
  areasT.push(inAreaTotal.value);
  ruas.push(inRua.value);
  numeros.push(inNumero.value);

  if (ehApartamento) {
    tipos.push("Apartamento");
  } else if (ehCasa) {
    tipos.push("Casa");
  } else if (ehSitio) {
    tipos.push("Sitio");
  } else if (ehDuplex) {
    tipos.push("Duplex");
  } else if (ehTerreno) {
    tipos.push("Terreno");
  } else {
    tipos.push("Loja");
  }



  localStorage.setItem("cidades", cidades);
  localStorage.setItem("logradouros", logradouros);
  localStorage.setItem("bairros", bairros);
  localStorage.setItem("tipos", tipos);
  localStorage.setItem("ceps", ceps);
  localStorage.setItem("areasC", areasC);
  localStorage.setItem("areasT", areasT);



  console.log("Adicionado com sucesso");

}

btAdicionar.addEventListener("click", adicionarImovel);

