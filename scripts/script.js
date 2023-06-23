 alert('Para ter acesso ao repositório deste projeto acesse: https://theus-iago.github.io/Calculadora/');

tela = document.getElementById('tela');

function insert(num) {
document.getElementById('tela').innerHTML += num;
}
function clean() {
  document.getElementById('tela').innerHTML = "";
}
function back() {
  tela= document.getElementById('tela').innerHTML;
  document.getElementById('tela').innerHTML= tela.substring(0, tela.length -1);
}
function result() {
  var tela = document.getElementById('tela').innerHTML;
  if(tela) {
  document.getElementById('tela').innerHTML = eval(tela);
  }else {
    document.getElementById('tela').innerHTML = `Nada para Calcular...`;
  }
}
