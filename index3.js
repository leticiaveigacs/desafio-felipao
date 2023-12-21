// # Desafio Escrevendo as classes de um Jogo
//-------------------------------------------------//

// Definição da classe Hero
class Hero {
    // Construtor da classe Hero com parâmetros name, title, age e tipoAtaque
    constructor(name, title, age, tipoAtaque) {
        this.name = name;         // Nome do herói
        this.title = title;       // Título ou classe do herói (e.g., Guerreiro, Mago, Monge, Ninja)
        this.age = age;           // Idade do herói
        this.tipoAtaque = tipoAtaque; // Tipo de ataque disponível para o herói (e.g., Espada, Magia, Artes Marciais, Shuriken)
    }

    // Método de ataque do herói
    attack() {
        // Mensagem de ataque com base no tipo do herói
        let attackMessage;
        switch (this.title.toLowerCase()) {
            case "guerreiro":
                attackMessage = "usou espada";  // Se o herói for um guerreiro
                break;
            case "mago":
                attackMessage = "usou magia";   // Se o herói for um mago
                break;
            case "monge":
                attackMessage = "usou artes marciais";  // Se o herói for um monge
                break;
            case "ninja":
                attackMessage = "usou shuriken";  // Se o herói for um ninja
                break;
            default:
                attackMessage = "não possui um ataque definido";  // Se o herói não pertencer a nenhuma classe conhecida
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.title} atacou e ${attackMessage}`);
        //console.log(`O ${this.title} ${this.name}, ${this.age} anos, atacou e ${attackMessage}.`);

    }

}//Definição do Objeto
// Criação de instâncias de Hero com diferentes parâmetros
let heroGuerreiro = new Hero("Lucas", "Guerreiro", 25, "espada");
let heroMago = new Hero("Julio", "Mago", 30, "magia");
let heroMonge = new Hero("David", "Monge", 35, "artes marciais");
let heroNinja = new Hero("Bruno", "Ninja", 28, "shuriken");

// Chamada do método attack para cada herói
heroGuerreiro.attack();
heroMago.attack();
heroMonge.attack();
heroNinja.attack();
