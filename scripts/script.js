tela = document.getElementById('tela');

function insert(num) {
document.getElementById('tela').innerHTML += num;
}
function clean() {
  document.getElementById('tela').innerHTML = "";
}
function back() {
  document.getElementById('tela').innerHTML= "";
}
function result() {
  document.getElementById('tela').innerHTML = eval();
}
