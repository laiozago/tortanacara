document.addEventListener("DOMContentLoaded", () => {
    const temas = {
        equacoes_primeiro_grau: [
            "Resolva: 3x + 6 = 24",
            "Resolva: 4x - 8 = 12",
            "Resolva: 6x + 4 = 40",
            "Resolva: 5x - 10 = 15",
            "Resolva: 8x + 12 = 76",
            "Resolva: 9x - 3 = 54",
            "Resolva: 10x + 6 = 66",
            "Resolva: 7x - 14 = 35",
            "Resolva: 11x + 11 = 88",
            "Resolva: 12x - 24 = 60",
            "Resolva: 14x + 14 = 112",
            "Resolva: 13x - 26 = 65",
            "Resolva: 16x + 8 = 104",
            "Resolva: 15x - 30 = 90",
            "Resolva: 18x + 9 = 117",
            "Resolva:<br>2x + 3y = 7<br>3x - y = 1",
            "Resolva:<br>4x - y = 3<br>2x + 5y = -1",
            "Resolva:<br>5x + 2y = 8<br>3x - 4y = -6",
            "Resolva:<br>6x - 3y = 12<br>2x + y = 1",
            "Resolva:<br>7x + y = 9<br>3x - 5y = -3",
            "Resolva:<br>3x + 4y = 10<br>5x - 2y = 1",
            "Resolva:<br>4x + 3y = 7<br>6x - y = 9",
        ],
        equacoes_segundo_grau: [
            "Resolva: x² + 2x - 3 = 0",
            "Resolva: x² - 5x + 6 = 0",
            "Resolva: x² + 3x - 4 = 0",
            "Resolva: x² - 7x + 10 = 0",
            "Resolva: x² + 4x - 5 = 0",
            "Resolva: x² - 9x + 20 = 0",
            "Resolva: x² + 5x - 6 = 0",
            "Resolva: x² - 11x + 30 = 0",
            "Resolva: x² + 6x - 7 = 0",
            "Resolva: x² - 13x + 36 = 0",
            "Resolva: x² + 7x - 8 = 0",
            "Resolva: x² - 15x + 50 = 0",
            "Resolva: x² + 8x - 9 = 0",
            "Resolva: x² - 17x + 60 = 0",
            "Resolva: x² + 9x - 10 = 0",
            "O produto de dois números ímpares consecutivos excede a soma deles em 47 unidades. Quais são esses números?",
            "A soma de dois números é 22 e o produto 105. Quais são esses números?",
            "A soma de dois números é 12 e a soma de seus quadrados é 74. Quais são esses números?",
            "O perímetro de um retângulo é 34 m e a área 60 m². Determine os lados do retângulo.",
            "Qual polígono, cujo número de lados é metade do numero de diagonais?"
        ],
        contas_numeros_grandes: [
            "Calcule: 1234 + 5678",
            "Calcule: 8765 - 4321",
            "Calcule: 3456 × 12",
            "Calcule: 98765 ÷ 5",
            "Calcule: 23456 + 78901",
            "Calcule: 76543 - 21098",
            "Calcule: 56789 × 4",
            "Calcule: 543210 ÷ 10",
            "Calcule: 345678 + 123456",
            "Calcule: 876543 - 654321",
            "Calcule: 456789 × 3",
            "Calcule: 678910 ÷ 5",
            "Calcule: 789012 + 345678",
            "Calcule: 987654 - 321098",
            "Calcule: 234567 × 6",
            "Calcule: 102030 + 505060",
            "Calcule: 707080 - 303030",
            "Calcule: 909090 × 2",
            "Calcule: 101010 ÷ 3",
            "Calcule: 555555 + 444444",
            "Calcule: 3333333 - 222222",
            "Calcule: 111111 × 11",
            "Calcule: 999999 ÷ 9",
            "Calcule: 1234567 + 876543",
            "Calcule: 654321 - 210987",

        ],
        probleminhas: [
            "O triplo de um número menos 5 é igual a 25. Qual é esse número?",
            "Um número somado com seu triplo é igual a 32. Qual é esse número?",
            "A diferença entre o dobro de um número e 8 é igual a 10. Qual é esse número?",
            "Se o quádruplo de um número é igual a 48, qual é esse número?",
            "A soma de dois números consecutivos é 37. Quais são esses números?",
            "Um número menos sua quarta parte é igual a 15. Qual é esse número?",
            "A soma de um número com a metade dele é igual a 36. Qual é esse número?",
            "O dobro de um número mais 3 é igual a 21. Qual é esse número?",
            "A diferença entre um número e a sua terça parte é 14. Qual é esse número?",
            "Se o triplo de um número é igual a 36, qual é esse número?",
            "Um número somado com a sua quarta parte é igual a 25. Qual é esse número?",
            "A soma de três números consecutivos é 51. Quais são esses números?",
            "A diferença entre o quádruplo de um número e 3 é igual a 29. Qual é esse número?",
            "Se a soma de um número com a sua quinta parte é igual a 30, qual é esse número?",
            "A diferença entre o dobro de um número e 1 é igual a 17. Qual é esse número?",
            "Se João tem o triplo da idade de Maria e juntos têm 60 anos, qual a idade de cada um?",
            "A soma de dois números é 40 e a diferença é 10. Quais são esses números?",
            "O dobro de um número menos 5 é igual a 13. Qual é esse número?",
            "Pedro gastou R$50 em uma camiseta e R$30 em um boné. Quanto ele gastou no total?",
            "A soma de três números consecutivos é 63. Quais são esses números?",
            "Um número somado com seu dobro é igual a 36. Qual é esse número?",
            "Um pai tem 40 anos e seu filho tem um quarto da sua idade. Quantos anos tem o filho?",
            "A diferença entre um número e a metade dele é 10. Qual é esse número?",
            "Se o triplo de um número é igual a 30, qual é esse número?",
            "A soma de dois números é 30 e um deles é o dobro do outro. Quais são esses números?",
            "Um número menos sua terça parte é igual a 15. Qual é esse número?",
            "Se a diferença entre o quadrado de um número e 5 é igual a 20, qual é esse número?",
            "O quíntuplo de um número é igual a 50. Qual é esse número?",
            "Um número somado com a sua metade e a sua terça parte é igual a 36. Qual é esse número?",
            "Se a soma de um número com sua quinta parte é igual a 20, qual é esse número?"
        ],
        problemas_duas_variaveis: [
            "Numa sala há tamboretes de 3 pernas e cadeiras de 4 pernas. Sendo 43 o número total de pernas e 12 o número total de cadeiras e tamboretes, determine o número de cadeiras.",
            "A população de uma cidade A é três vezes maior que a população da cidade B. Somando a população das duas cidades temos o total de 200.000 habitantes. Qual a população da cidade A?",
            "Cláudio usou apenas notas de R$ 20,00 e de R$ 5,00 para fazer um pagamento de R$ 140,00. Quantas notas de cada tipo ele usou, sabendo que no total foram 10 notas?",
            "Num aquário há 8 peixes, entre pequenos e grandes. Se os pequenos fossem mais um, seria o dobro dos grandes. Quantos são os pequenos?",
            "Descubra quais são os dois números em que o dobro do maior somado com o triplo do menor dá 16, e o maior deles somado com quíntuplo do menor dá 1.",
            "A soma de dois números é 37. A diferença entre eles é 9. Quais são esses números?",
            "Em uma praça há 18 crianças andando de bicicleta ou de skate. No total, há 50 rodas girando pela praça. Quantas crianças andam de bicicleta e quantas andam de skate?",
            "Numa determinada livraria, a soma dos preços de aquisição de dois lápis e um estojo é R$10,00. O preço do estojo é R$5,00 mais barato que o preço de três lápis. Qual a soma dos preços de aquisição de um estojo e de um lápis?",
            "Maria tem em sua bolsa R$15,60 em moedas de R$ 0,10 e de R$ 0,25. Dado que o número de moedas de 25 centavos é o dobro do número de moedas de 10 centavos, quantas moedas há no total na bolsa?",
            "Em uma festa, o número de homens é o dobro do número de mulheres. Se há 90 pessoas na festa, quantos homens e quantas mulheres há?",
            "Uma loja vende cadeiras por R$50,00 e mesas por R$200,00. Se em um dia foram vendidos 15 móveis totalizando R$2.000,00, quantas cadeiras e quantas mesas foram vendidas?",
            "Em um canteiro, há 24 flores, entre rosas e tulipas. Se há 6 rosas a mais do que tulipas, quantas são as rosas e quantas são as tulipas?",
            "O preço de um caderno é R$8,00 e o de uma caneta é R$2,00. Comprando juntos 10 itens e gastando R$52,00, quantos cadernos e quantas canetas foram comprados?",
            "Um ônibus tem 50 passageiros, entre adultos e crianças. Se o número de crianças é o dobro do número de adultos, quantos são os adultos e quantas são as crianças?",
            "Numa fazenda, o número de galinhas é três vezes maior que o número de vacas. Sabendo que há 80 animais no total, quantas galinhas e quantas vacas há na fazenda?",
            "Em uma biblioteca, há 150 livros de matemática e física. Se o número de livros de física é o triplo do número de livros de matemática, quantos são os livros de cada tipo?",
            "A soma das idades de Ana e Beatriz é 40 anos. Se Ana é 6 anos mais velha que Beatriz, quais são suas idades?",
            "Uma escola tem 300 alunos, entre meninos e meninas. Se o número de meninas é 40 a mais que o número de meninos, quantos meninos e quantas meninas há na escola?",
            "Em um jardim zoológico, há 50 animais entre leões e tigres. Se o número de leões é o dobro do número de tigres, quantos leões e quantos tigres há no zoológico?",
            "O preço de um bilhete de ônibus é R$3,00 e o de um bilhete de metrô é R$5,00. Em um dia, foram vendidos 100 bilhetes totalizando R$400,00. Quantos bilhetes de ônibus e quantos bilhetes de metrô foram vendidos?",
            "João e Pedro juntos têm 60 anos. Se João tem o dobro da idade de Pedro, qual é a idade de cada um?",
            "Em uma caixa, há 80 bolas, entre vermelhas e azuis. Se o número de bolas vermelhas é 20 a mais que o número de bolas azuis, quantas bolas vermelhas e quantas bolas azuis há na caixa?",
            "Em uma empresa, há 120 funcionários, entre homens e mulheres. Se o número de mulheres é 30 a mais que o número de homens, quantos homens e quantas mulheres há na empresa?",
            "Uma mercearia vende maçãs por R$4,00 e bananas por R$3,00. Se em um dia foram vendidas 50 frutas totalizando R$170,00, quantas maçãs e quantas bananas foram vendidas?",
            "Em um estacionamento, há 80 veículos, entre carros e motos. Se o número de carros é o triplo do número de motos, quantos carros e quantas motos há no estacionamento?",
            "Numa escola, há 500 alunos, entre meninos e meninas. Se o número de meninas é 100 a mais que o número de meninos, quantos meninos e quantas meninas há na escola?",
            "Em um circo, há 30 animais, entre elefantes e leões. Se o número de elefantes é o dobro do número de leões, quantos elefantes e quantos leões há no circo?",
            "Numa fábrica, há 200 funcionários, entre operários e supervisores. Se o número de operários é 180 a mais que o número de supervisores, quantos operários e quantos supervisores há na fábrica?",
            "Em uma feira, foram vendidas 300 frutas, entre maçãs e laranjas. Se o número de maçãs vendidas é 50 a mais que o número de laranjas, quantas maçãs e quantas laranjas foram vendidas?",  
        ],
        surpresinha: [
            "Quantas patas têm um casal de patos?",
            "Se o dia anterior a ontem é o dia 21, que dia é o dia depois de amanhã?",
            "A é irmão de B. B é irmão de C. C é a mãe de D. Qual é o parentesco entre D e A?",
            "Uma jovem tem o mesmo número de irmãos e irmãs. Mas cada um dos irmãos dela tem duas vezes menos irmãos do que irmãs. Quantos irmãos e irmãs existem nessa família?",
            "— Bom dia, senhoras cem pombas.  — Nós não somos cem pombas. Somos nós, outras tantas como nós, a quarta parte de nós, e contigo, senhor gavião, cem aves são. Quantas aves há no total?",
            "Um pai tem o triplo da idade de seu filho. Se a soma de suas idades é 48 anos, quantos anos tem cada um?",
            "Em uma corrida, João chegou antes de Pedro, mas depois de Maria. Quem chegou em primeiro?",
            "Se 5 gatos comem 5 ratos em 5 minutos, quantos gatos são necessários para comer 100 ratos em 100 minutos?",
            "Uma família tem o mesmo número de filhos homens e filhas mulheres. Se cada filha tem dois irmãos e duas irmãs, quantos filhos e filhas há na família?",
            "Em um aquário, há peixes vermelhos e azuis. Se o número de peixes azuis é o triplo do número de peixes vermelhos e há 40 peixes no total, quantos peixes vermelhos e quantos peixes azuis há no aquário?",
            "Um agricultor planta milho e soja. Se a área plantada com milho é o dobro da área plantada com soja e a área total plantada é 150 hectares, quantos hectares foram plantados com cada cultura?",
            "Em um estádio, há torcedores do time A e do time B. Se o número de torcedores do time A é o triplo do número de torcedores do time B e há 40.000 torcedores no total, quantos torcedores de cada time há no estádio?",
            "Em uma escola, há três vezes mais alunos do que alunas. Se há 120 alunas, quantos alunos há na escola?",
            "Se um trem leva 2 horas para percorrer 120 km, qual é a velocidade média do trem em km/h?",
            "Em uma turma, há 30 alunos. Se a razão entre o número de meninos e meninas é 2:3, quantos meninos e quantas meninas há na turma?",
            "Um fazendeiro possui ovelhas e cabras. Se o número de ovelhas é o dobro do número de cabras e há 90 animais no total, quantas ovelhas e quantas cabras há na fazenda?",
            "Um pai tem 45 anos e seu filho tem um terço de sua idade. Quantos anos tem o filho?",
            "Em uma competição, a equipe A ganhou 3 vezes mais pontos do que a equipe B. Se a equipe A ganhou 60 pontos, quantos pontos ganhou a equipe B?",
            "Um estudante divide seu tempo de estudo entre matemática e física. Se ele gasta o dobro do tempo em matemática do que em física e estuda 6 horas no total, quanto tempo ele passa estudando cada matéria?",
            "Se um livro tem 240 páginas e você lê 30 páginas por dia, em quantos dias você terminará de ler o livro?",
            "Em um quintal, há 24 aves, entre galinhas e patos. Se o número de galinhas é o dobro do número de patos, quantas galinhas e quantos patos há no quintal?",
            "Um caixa eletrônico tem notas de R$50,00 e R$100,00. Se o número de notas de R$50,00 é o triplo do número de notas de R$100,00 e há 400 notas no total, quantas notas de cada valor há no caixa?",
            "Se a idade de João é o dobro da idade de Maria e juntos têm 45 anos, quantos anos tem João e quantos anos tem Maria?",
            "Em um mercado, foram vendidos 150 produtos, entre frutas e verduras. Se o número de frutas vendidas é o triplo do número de verduras, quantas frutas e quantas verduras foram vendidas?",
            "Em um zoológico, há três vezes mais pássaros do que mamíferos. Se há 120 pássaros, quantos mamíferos há no zoológico?",
        ]
    };

    const usedQuestions = new Set();
    const buttons = document.querySelectorAll(".btn");
    const questionText = document.getElementById("questionText");
    const questionModal = new bootstrap.Modal(document.getElementById("questionModal"));
    const startTimerBtn = document.getElementById("startTimerBtn");
    const fecharModalBtn = document.getElementById("fecharModalBtn");

    let timerIntervalId = null; // Variável para armazenar o intervalo do timer

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tema = button.getAttribute("data-tema");
            if (temas[tema]) {
                const questions = temas[tema].filter(q => !usedQuestions.has(q));
                if (questions.length === 0) {
                    alert("Todas as perguntas desse tema já foram usadas.");
                    return;
                }
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
                questionText.innerHTML = randomQuestion; // Use innerHTML para permitir MathJax
                usedQuestions.add(randomQuestion);
                questionModal.show();

                // Atualiza o MathJax após mostrar o modal
                MathJax.typeset(); // Para MathJax versão 3
            }
        });
    });

    startTimerBtn.addEventListener("click", () => {
        startTimer(120); // 2 minutos = 120 segundos
    });

    fecharModalBtn.addEventListener("click", () => {
        if (timerIntervalId !== null) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
            startTimerBtn.textContent = "Iniciar Timer"; // Resetar o texto do botão
        }
        questionModal.hide();
    });

    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        timerIntervalId = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            startTimerBtn.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerIntervalId);
                timerIntervalId = null;
                startTimerBtn.textContent = "Iniciar Timer";
                alert("Tempo esgotado!");
            }
        }, 1000);
    }
});
