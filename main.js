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
            "Resolva: 18x + 9 = 117"
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
        ],
        surpresinha: [
            "Quantas patas têm um casal de patos?",
            "Se o dia anterior a ontem é o dia 21, que dia é o dia depois de amanhã?",
            "A é irmão de B. B é irmão de C. C é a mãe de D. Qual é o parentesco entre D e A?",
            "Uma jovem tem o mesmo número de irmãos e irmãs. Mas cada um dos irmãos dela tem duas vezes menos irmãos do que irmãs. Quantos irmãos e irmãs existem nessa família?",
            "— Bom dia, senhoras cem pombas.  — Nós não somos cem pombas. Somos nós, outras tantas como nós, a quarta parte de nós, e contigo, senhor gavião, cem aves são. Quantas aves há no total?",
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
