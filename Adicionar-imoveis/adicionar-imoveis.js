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
  if (localStorage.cidades != null && localStorage.bairros != null && localStorage.tipos != null && localStorage.ceps != null
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
    localStorage.setItem("ceps", ceps);
    localStorage.setItem("ruas", ruas);
    localStorage.setItem("numeros", numeros);
    localStorage.setItem("bairros", bairros);
    localStorage.setItem("tipos", tipos);
    localStorage.setItem("areasC", areasC);
    localStorage.setItem("areasT", areasT);

    //Criar elemento "Imovel adicionado com sucesso"
  
  }

  //Criar o erro

}

btAdicionar.addEventListener("click", adicionarImovel);

