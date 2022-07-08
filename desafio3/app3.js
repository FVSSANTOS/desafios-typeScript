var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = '';
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        campoSaldo.innerHTML += soma;
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
