// #  Desafio Calculadora de partidas Rankeadas

// Importa o módulo readline para lidar com a entrada e saída de dados no console
const readline = require('readline');

// Cria uma interface de leitura e escrita para o console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuário o número de vitórias
rl.question("Digite o numero de vitórias: ", function (vitoria) {

    // Pergunta ao usuário o número de derrotas
    rl.question("Digite o numero de derrotas ", function (derrota) {

        // Converte as entradas do usuário para números inteiros
        vitoria = parseInt(vitoria);
        derrota = parseInt(derrota);

        // Define os níveis disponíveis
        let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

        // Função que calcula o saldo
        function calcularSaldo(vitoria, derrota) {
            return vitoria - derrota;
        }

        // Função que determina a faixa com base no saldo
        function determinarFaixa(saldo) {
            if (saldo <= 10) {
                return 0;// Ferro
            } else if (saldo <= 20) {
                return 1;// Bronze
            } else if (saldo <= 50) {
                return 2; // Prata
            } else if (saldo <= 80) {
                return 3;  // Ouro
            } else if (vitoria <= 90) {
                return 4;// Diamante
            } else if (saldo <= 100) {
                return 5;// Lendário
            } else {
                return 6;// Imortal
            }
        }

        // Calcula o saldo e determina a faixa
        let saldo = calcularSaldo(vitoria, derrota);
        let faixaIndex = determinarFaixa(saldo);
        let faixa = niveis[faixaIndex];

        // Imprime a mensagem final com o saldo e a faixa
        console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${faixa}`);

        // Fecha a interface de leitura
        rl.close();
    });
});
