;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
;
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
