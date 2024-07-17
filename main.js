document.addEventListener("DOMContentLoaded", () => {
    const temas = {
        equacoes_primeiro_grau: [
            "1-Resolva: 3x + 6 = 24",
            "2-Resolva: 4x - 8 = 12",
            "3-Resolva: 6x + 4 = 40",
            "4-Resolva: 5x - 10 = 15",
            "5-Resolva: 8x + 12 = 76",
            "6-Resolva: 9x - 3 = 54",
            "7-Resolva: 10x + 6 = 66",
            "8-Resolva: 7x - 14 = 35",
            "9-Resolva: 11x + 11 = 88",
            "10-Resolva: 12x - 24 = 60",
            "11-Resolva: 14x + 14 = 112",
            "12-Resolva: 13x - 26 = 65",
            "13-Resolva: 16x + 8 = 104",
            "14-Resolva: 15x - 30 = 90",
            "15-Resolva: 18x + 9 = 117",
            "16-Resolva:<br>2x + 3y = 7<br>3x - y = 1",
            "17-Resolva:<br>4x - y = 3<br>2x + 5y = -1",
            "18-Resolva:<br>5x + 2y = 8<br>3x - 4y = -6",
            "19-Resolva:<br>6x - 3y = 12<br>2x + y = 1",
            "20-Resolva:<br>7x + y = 9<br>3x - 5y = -3",
            "21-Resolva:<br>3x + 4y = 10<br>5x - 2y = 1",
            "22-Resolva:<br>4x + 3y = 7<br>6x - y = 9",
        ],
        equacoes_segundo_grau: [
            "23-Resolva: x² + 2x - 3 = 0",
            "24-Resolva: x² - 5x + 6 = 0",
            "25-Resolva: x² + 3x - 4 = 0",
            "26-Resolva: x² - 7x + 10 = 0",
            "27-Resolva: x² + 4x - 5 = 0",
            "28-Resolva: x² - 9x + 20 = 0",
            "29-Resolva: x² + 5x - 6 = 0",
            "30-Resolva: x² - 11x + 30 = 0",
            "31-Resolva: x² + 6x - 7 = 0",
            "32-Resolva: x² - 13x + 36 = 0",
            "33-Resolva: x² + 7x - 8 = 0",
            "34-Resolva: x² - 15x + 50 = 0",
            "35-Resolva: x² + 8x - 9 = 0",
            "36-Resolva: x² - 17x + 60 = 0",
            "37-Resolva: x² + 9x - 10 = 0",
            "38-O produto de dois números ímpares consecutivos excede a soma deles em 47 unidades. Quais são esses números?",
            "39-A soma de dois números é 22 e o produto 105. Quais são esses números?",
            "40-A soma de dois números é 12 e a soma de seus quadrados é 74. Quais são esses números?",
            "41-O perímetro de um retângulo é 34 m e a área 60 m². Determine os lados do retângulo.",
            "42-Qual polígono, cujo número de lados é metade do numero de diagonais?"
        ],
        contas_numeros_grandes: [
            "43-Calcule: 1234 + 5678",
            "44-Calcule: 8765 - 4321",
            "45-Calcule: 3456 × 12",
            "46-Calcule: 98765 ÷ 5",
            "47-Calcule: 23456 + 78901",
            "48-Calcule: 76543 - 21098",
            "49-Calcule: 56789 × 4",
            "50-Calcule: 543210 ÷ 10",
            "51-Calcule: 345678 + 123456",
            "52-Calcule: 876543 - 654321",
            "53-Calcule: 456789 × 3",
            "54-Calcule: 678910 ÷ 5",
            "55-Calcule: 789012 + 345678",
            "56-Calcule: 987654 - 321098",
            "57-Calcule: 234567 × 6",
            "58-Calcule: 102030 + 505060",
            "59-Calcule: 707080 - 303030",
            "60-Calcule: 909090 × 2",
            "61-Calcule: 101010 ÷ 3",
            "62-Calcule: 555555 + 444444",
            "63-Calcule: 3333333 - 222222",
            "64-Calcule: 111111 × 11",
            "65-Calcule: 999999 ÷ 9",
            "66-Calcule: 1234567 + 876543",
            "67-Calcule: 654321 - 210987",

        ],
        probleminhas: [
            "68-O triplo de um número menos 5 é igual a 25. Qual é esse número?",
            "69-Um número somado com seu triplo é igual a 32. Qual é esse número?",
            "68-A diferença entre o dobro de um número e 8 é igual a 10. Qual é esse número?",
            "69-Se o quádruplo de um número é igual a 48, qual é esse número?",
            "70-A soma de dois números consecutivos é 37. Quais são esses números?",
            "71-Um número menos sua quarta parte é igual a 15. Qual é esse número?",
            "72-A soma de um número com a metade dele é igual a 36. Qual é esse número?",
            "73-O dobro de um número mais 3 é igual a 21. Qual é esse número?",
            "74-A diferença entre um número e a sua terça parte é 14. Qual é esse número?",
            "75-Se o triplo de um número é igual a 36, qual é esse número?",
            "76-Um número somado com a sua quarta parte é igual a 25. Qual é esse número?",
            "77-A soma de três números consecutivos é 51. Quais são esses números?",
            "78-A diferença entre o quádruplo de um número e 3 é igual a 29. Qual é esse número?",
            "79-Se a soma de um número com a sua quinta parte é igual a 30, qual é esse número?",
            "80-A diferença entre o dobro de um número e 1 é igual a 17. Qual é esse número?",
            "81-Se João tem o triplo da idade de Maria e juntos têm 60 anos, qual a idade de cada um?",
            "82-A soma de dois números é 40 e a diferença é 10. Quais são esses números?",
            "83-O dobro de um número menos 5 é igual a 13. Qual é esse número?",
            "84-Pedro gastou R$50 em uma camiseta e R$30 em um boné. Quanto ele gastou no total?",
            "85-A soma de três números consecutivos é 63. Quais são esses números?",
            "86-Um número somado com seu dobro é igual a 36. Qual é esse número?",
            "87-Um pai tem 40 anos e seu filho tem um quarto da sua idade. Quantos anos tem o filho?",
            "88-A diferença entre um número e a metade dele é 10. Qual é esse número?",
            "89-Se o triplo de um número é igual a 30, qual é esse número?",
            "90-A soma de dois números é 30 e um deles é o dobro do outro. Quais são esses números?",
            "91-Um número menos sua terça parte é igual a 15. Qual é esse número?",
            "92-Se a diferença entre o quadrado de um número e 5 é igual a 20, qual é esse número?",
            "93-O quíntuplo de um número é igual a 50. Qual é esse número?",
            "94-Um número somado com a sua metade e a sua terça parte é igual a 36. Qual é esse número?",
            "95-Se a soma de um número com sua quinta parte é igual a 20, qual é esse número?"
        ],
        problemas_duas_variaveis: [
            "96-Numa sala há tamboretes de 3 pernas e cadeiras de 4 pernas. Sendo 43 o número total de pernas e 12 o número total de cadeiras e tamboretes, determine o número de cadeiras.",
            "97-A população de uma cidade A é três vezes maior que a população da cidade B. Somando a população das duas cidades temos o total de 200.000 habitantes. Qual a população da cidade A?",
            "98-Cláudio usou apenas notas de R$ 20,00 e de R$ 5,00 para fazer um pagamento de R$ 140,00. Quantas notas de cada tipo ele usou, sabendo que no total foram 10 notas?",
            "99-Num aquário há 8 peixes, entre pequenos e grandes. Se os pequenos fossem mais um, seria o dobro dos grandes. Quantos são os pequenos?",
            "100-Descubra quais são os dois números em que o dobro do maior somado com o triplo do menor dá 16, e o maior deles somado com quíntuplo do menor dá 1.",
            "101-A soma de dois números é 37. A diferença entre eles é 9. Quais são esses números?",
            "102-Em uma praça há 18 crianças andando de bicicleta ou de skate. No total, há 50 rodas girando pela praça. Quantas crianças andam de bicicleta e quantas andam de skate?",
            "103-Numa determinada livraria, a soma dos preços de aquisição de dois lápis e um estojo é R$10,00. O preço do estojo é R$5,00 mais barato que o preço de três lápis. Qual a soma dos preços de aquisição de um estojo e de um lápis?",
            "104-Maria tem em sua bolsa R$15,60 em moedas de R$ 0,10 e de R$ 0,25. Dado que o número de moedas de 25 centavos é o dobro do número de moedas de 10 centavos, quantas moedas há no total na bolsa?",
            "105-Em uma festa, o número de homens é o dobro do número de mulheres. Se há 90 pessoas na festa, quantos homens e quantas mulheres há?",
            "106-Uma loja vende cadeiras por R$50,00 e mesas por R$200,00. Se em um dia foram vendidos 15 móveis totalizando R$2.000,00, quantas cadeiras e quantas mesas foram vendidas?",
            "107-Em um canteiro, há 24 flores, entre rosas e tulipas. Se há 6 rosas a mais do que tulipas, quantas são as rosas e quantas são as tulipas?",
            "108-O preço de um caderno é R$8,00 e o de uma caneta é R$2,00. Comprando juntos 10 itens e gastando R$52,00, quantos cadernos e quantas canetas foram comprados?",
            "109-Um ônibus tem 50 passageiros, entre adultos e crianças. Se o número de crianças é o dobro do número de adultos, quantos são os adultos e quantas são as crianças?",
            "110-Numa fazenda, o número de galinhas é três vezes maior que o número de vacas. Sabendo que há 80 animais no total, quantas galinhas e quantas vacas há na fazenda?",
            "111-Em uma biblioteca, há 150 livros de matemática e física. Se o número de livros de física é o triplo do número de livros de matemática, quantos são os livros de cada tipo?",
            "112-A soma das idades de Ana e Beatriz é 40 anos. Se Ana é 6 anos mais velha que Beatriz, quais são suas idades?",
            "113-Uma escola tem 300 alunos, entre meninos e meninas. Se o número de meninas é 40 a mais que o número de meninos, quantos meninos e quantas meninas há na escola?",
            "114-Em um jardim zoológico, há 50 animais entre leões e tigres. Se o número de leões é o dobro do número de tigres, quantos leões e quantos tigres há no zoológico?",
            "115-O preço de um bilhete de ônibus é R$3,00 e o de um bilhete de metrô é R$5,00. Em um dia, foram vendidos 100 bilhetes totalizando R$400,00. Quantos bilhetes de ônibus e quantos bilhetes de metrô foram vendidos?",
            "116-João e Pedro juntos têm 60 anos. Se João tem o dobro da idade de Pedro, qual é a idade de cada um?",
            "117-Em uma caixa, há 80 bolas, entre vermelhas e azuis. Se o número de bolas vermelhas é 20 a mais que o número de bolas azuis, quantas bolas vermelhas e quantas bolas azuis há na caixa?",
            "118-Em uma empresa, há 120 funcionários, entre homens e mulheres. Se o número de mulheres é 30 a mais que o número de homens, quantos homens e quantas mulheres há na empresa?",
            "119-Uma mercearia vende maçãs por R$4,00 e bananas por R$3,00. Se em um dia foram vendidas 50 frutas totalizando R$170,00, quantas maçãs e quantas bananas foram vendidas?",
            "120-Em um estacionamento, há 80 veículos, entre carros e motos. Se o número de carros é o triplo do número de motos, quantos carros e quantas motos há no estacionamento?",
            "121-Numa escola, há 500 alunos, entre meninos e meninas. Se o número de meninas é 100 a mais que o número de meninos, quantos meninos e quantas meninas há na escola?",
            "122-Em um circo, há 30 animais, entre elefantes e leões. Se o número de elefantes é o dobro do número de leões, quantos elefantes e quantos leões há no circo?",
            "123-Numa fábrica, há 200 funcionários, entre operários e supervisores. Se o número de operários é 180 a mais que o número de supervisores, quantos operários e quantos supervisores há na fábrica?",
            "124-Em uma feira, foram vendidas 300 frutas, entre maçãs e laranjas. Se o número de maçãs vendidas é 50 a mais que o número de laranjas, quantas maçãs e quantas laranjas foram vendidas?",  
        ],
        surpresinha: [
            "125-Quantas patas têm um casal de patos?",
            "126-Se o dia anterior a ontem é o dia 21, que dia é o dia depois de amanhã?",
            "127-A é irmão de B. B é irmão de C. C é a mãe de D. Qual é o parentesco entre D e A?",
            "128-Uma jovem tem o mesmo número de irmãos e irmãs. Mas cada um dos irmãos dela tem duas vezes menos irmãos do que irmãs. Quantos irmãos e irmãs existem nessa família?",
            "129-— Bom dia, senhoras cem pombas.  — Nós não somos cem pombas. Somos nós, outras tantas como nós, a quarta parte de nós, e contigo, senhor gavião, cem aves são. Quantas aves há no total?",
            "130-Um pai tem o triplo da idade de seu filho. Se a soma de suas idades é 48 anos, quantos anos tem cada um?",
            "131-Em uma corrida, João chegou antes de Pedro, mas depois de Maria. Quem chegou em primeiro?",
            "132-Se 5 gatos comem 5 ratos em 5 minutos, quantos gatos são necessários para comer 100 ratos em 100 minutos?",
            "134-Em um aquário, há peixes vermelhos e azuis. Se o número de peixes azuis é o triplo do número de peixes vermelhos e há 40 peixes no total, quantos peixes vermelhos e quantos peixes azuis há no aquário?",
            "135-Um agricultor planta milho e soja. Se a área plantada com milho é o dobro da área plantada com soja e a área total plantada é 150 hectares, quantos hectares foram plantados com cada cultura?",
            "136-Em um estádio, há torcedores do time A e do time B. Se o número de torcedores do time A é o triplo do número de torcedores do time B e há 40.000 torcedores no total, quantos torcedores de cada time há no estádio?",
            "137-Em uma escola, há três vezes mais alunos do que alunas. Se há 120 alunas, quantos alunos há na escola?",
            "138-Se um trem leva 2 horas para percorrer 120 km, qual é a velocidade média do trem em km/h?",
            "139-Em uma turma, há 30 alunos. Se a razão entre o número de meninos e meninas é 2:3, quantos meninos e quantas meninas há na turma?",
            "140-Um fazendeiro possui ovelhas e cabras. Se o número de ovelhas é o dobro do número de cabras e há 90 animais no total, quantas ovelhas e quantas cabras há na fazenda?",
            "141-Um pai tem 45 anos e seu filho tem um terço de sua idade. Quantos anos tem o filho?",
            "142-Em uma competição, a equipe A ganhou 3 vezes mais pontos do que a equipe B. Se a equipe A ganhou 60 pontos, quantos pontos ganhou a equipe B?",
            "143-Um estudante divide seu tempo de estudo entre matemática e física. Se ele gasta o dobro do tempo em matemática do que em física e estuda 6 horas no total, quanto tempo ele passa estudando cada matéria?",
            "144-Se um livro tem 240 páginas e você lê 30 páginas por dia, em quantos dias você terminará de ler o livro?",
            "145-Em um quintal, há 24 aves, entre galinhas e patos. Se o número de galinhas é o dobro do número de patos, quantas galinhas e quantos patos há no quintal?",
            "146-Um caixa eletrônico tem notas de R$50,00 e R$100,00. Se o número de notas de R$50,00 é o triplo do número de notas de R$100,00 e há 400 notas no total, quantas notas de cada valor há no caixa?",
            "147-Se a idade de João é o dobro da idade de Maria e juntos têm 45 anos, quantos anos tem João e quantos anos tem Maria?",
            "148-Em um mercado, foram vendidos 150 produtos, entre frutas e verduras. Se o número de frutas vendidas é o triplo do número de verduras, quantas frutas e quantas verduras foram vendidas?",
            "149-Em um zoológico, há três vezes mais pássaros do que mamíferos. Se há 120 pássaros, quantos mamíferos há no zoológico?",
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
