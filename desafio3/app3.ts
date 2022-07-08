let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if(campoSaldo){
campoSaldo.innerHTML = '';
}

function somarAoSaldo(soma) {
    if(campoSaldo){
     campoSaldo.innerHTML += soma;
    }
}

function limparSaldo() {
    if(campoSaldo){
    campoSaldo.innerHTML = '';
    }
}


botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});



botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
