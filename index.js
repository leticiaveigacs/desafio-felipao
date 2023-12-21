// # Desafio Classificador de nível de Herói

// Solicita o nome do usuário
//let nome = prompt("Digite o seu nome");
let nome = "Letícia";
// Solicita a quantidade de experiência do usuário e converte para um número inteiro
//let nivel = parseInt(prompt("Digite seu nivel"));
let nivel = "150000";
nivel = parseInt(nivel); // Converte a string para um número inteiro
// Inicializa a variável i que será usada para determinar o nível do herói
let i;
// Array que representa os diferentes níveis de experiência
let experiencia = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// Verifica em qual intervalo o nível se encaixa
if (nivel <= 1000) {
    i = 0; // Define o índice para Ferro se o nível for até 1000
} else if (nivel <= 2000) {
    i = 1; // Define o índice para Bronze se o nível for até 2000
} else if (nivel <= 5000) {
    i = 2; // Define o índice para Prata se o nível for até 5000
} else if (nivel <= 7000) {
    i = 3; // Define o índice para Ouro se o nível for até 7000
} else if (nivel <= 8000) {
    i = 4; // Define o índice para Platina se o nível for até 8000
} else if (nivel <= 9000) {
    i = 5; // Define o índice para Ascendente se o nível for até 9000
} else if (nivel <= 10000) {
    i = 6; // Define o índice para Imortal se o nível for até 10000
} else {
    i = 7; // Define o índice para Radiante se nenhuma das condições anteriores for atendida
    //i++; // Incrementa i apenas se a condição do "else" for atendida
}

console.log(`O nome do herói é ${nome} está no nível:${experiencia[i]}`);

