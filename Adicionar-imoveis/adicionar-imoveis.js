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

var cidades;
var bairros;
var tipos;
var ceps;
var areasC;
var areasT;
var numeros;
var ruas;

function criaCookies(){
  if (localStorage.cidades != null && localStorage.bairros != null && (localStorage.tipos != null && localStorage.tipos != "") && localStorage.ceps != null
    && localStorage.areasC != null && localStorage.areasT != null && localStorage.numeros != null && localStorage.ruas != null){
    cidades = localStorage.cidades.split(",");
    bairros = localStorage.bairros.split(",");
    tipos = localStorage.tipos.split(",");
    ceps = localStorage.ceps.split(",");
    areasC = localStorage.areasC.split(",");
    areasT = localStorage.areasT.split(",");
    numeros = localStorage.numeros.split(",");
    ruas = localStorage.ruas.split(",");
  }
  else{
    cidades = [];
    bairros = [];
    tipos = [];
    ceps = [];
    areasC = [];
    areasT = [];
    numeros = [];
    ruas = [];
  }
}

function adicionarImovel() {

  var ehApartamento = rbApartamento.checked;
  var ehCasa = rbCasa.checked;
  var ehSitio = rbSitio.checked;
  var ehDuplex = rbDuplex.checked;
  var ehTerreno = rbTerreno.checked;
  var ehLoja = rbLoja.checked;

  var cidade = inCidade.value;
  var rua = inRua.value;
  var numero = inNumero.value;
  var bairro = inBairro.value;
  var cep = inCep.value;
  var areaC = inAreaConstruida.value;
  var areaT = inAreaTotal.value;
  var tipo = "";

  if(cidade != "" && rua != "" && numero != "" && bairro != "" && cep != "" && areaC != "" && areaT != ""
  &&  (ehApartamento || ehCasa || ehSitio || ehDuplex || ehTerreno || ehLoja) ){
    
    cidades.push(cidade);
    ceps.push(cep);
    ruas.push(rua);
    numeros.push(numero);
    bairros.push(bairro);
    areasC.push(areaC);
    areasT.push(areaT);
  
    if (ehApartamento) {
      tipo = "Apartamento";
    } else if (ehCasa) {
      tipo = "Casa";
    } else if (ehSitio) {
      tipo = "Sitio";
    } else if (ehDuplex) {
      tipo = "Duplex";
    } else if (ehTerreno) {
      tipo = "Terreno";
    } else {
      tipo = "Loja";
    }
    tipos.push(tipo);


    localStorage.cidades = cidades;
    localStorage.ceps = ceps;
    localStorage.ruas = ruas;
    localStorage.numeros = numeros;
    localStorage.bairros = bairros;
    localStorage.tipos = tipos;
    localStorage.areasC = areasC;
    localStorage.areasT = areasT;

    var msgSucesso = document.querySelector(".msg-sucesso");
    msgSucesso.innerText = "";
    var textoInformacoes = document.createElement("p");
    textoInformacoes.textContent = "Imóvel adicionado com sucesso!";
    textoInformacoes.classList.add("texto-informacoes");
    msgSucesso.appendChild(textoInformacoes);
  
  }else{
    var msgSucesso = document.querySelector(".msg-sucesso");
    msgSucesso.innerText = "";
    var textoInformacoes = document.createElement("p");
    textoInformacoes.textContent = "Imóvel não foi adicionado!";
    textoInformacoes.classList.add("texto-informacoes");
    msgSucesso.appendChild(textoInformacoes);
  }

}

btAdicionar.addEventListener("click", adicionarImovel);

