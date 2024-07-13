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
            "Resolva: x² + 9x - 10 = 0"
        ],
        expressoes_numericas: [
            "Resolva: \\sqrt{16} + 4 * 3 - 5",
            "Resolva: 2^3 + 6 \\div 2 - 1",
            "Resolva: (5 + 3) * 2 - 4",
            "Resolva: 3 + (2^4 - 7)",
            "Resolva: \\sqrt{49} - 3 * 2 + 5",
            "Resolva: 4 * (6 - 3) + 2^3",
            "Resolva: (3 + 5) * \\sqrt{9} - 8",
            "Resolva: 10 - (2^2 + 5)",
            "Resolva: \\sqrt{25} + 3 * (4 - 1)",
            "Resolva: 7 + [2 * (3 + 2) - 4]",
            "Resolva: 6 * \\sqrt{4} + 3^2 - 5",
            "Resolva: 2 * (5 + 3) - 4^2",
            "Resolva: 8 + [3^2 - (4 + 1)]",
            "Resolva: 9 - 2^3 + \\sqrt{16}",
            "Resolva: 3 * (7 - 4) + 2^2",
            "Resolva: (6 + 2) \\div 2 + 5^2",
            "Resolva: 4 * (\\sqrt{9} + 2) - 7",
            "Resolva: [5 * (3 + 2) - 9]",
            "Resolva: 2^4 - 3 * (6 - 2)",
            "Resolva: 7 + (\\sqrt{36} \\div 3)^2"
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
            "Calcule: 555555 + 444444"
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
            "João comprou 2 sucos e 1 salgado por R$10. Quanto custam cada suco e cada salgado?",
            "Maria tem R$50. Se ela gastar R$20 em livros e o resto em cadernos, quantos cadernos ela pode comprar se cada um custa R$5?",
            "Em uma festa, foram vendidos 3 refrigerantes e 2 pizzas por R$40. Quanto custa cada refrigerante e cada pizza?",
            "Uma pessoa comprou 4 camisetas e 1 par de calças por R$120. Se cada camiseta custa R$25, quanto custou o par de calças?",
            "Carlos e Ana foram ao cinema. Carlos gastou R$15 em pipoca e Ana gastou R$10 em doces. Se juntos eles gastaram R$35, quanto custou o ingresso de cada um?",
            "No mercado, 3 kg de maçãs e 2 kg de bananas custam R$25. Se 1 kg de maçã custa R$7, quanto custa 1 kg de banana?",
            "Um restaurante vende 2 pratos de comida e 3 bebidas por R$50. Se cada bebida custa R$10, quanto custa cada prato?",
            "Pedro e Lucas foram à sorveteria. Pedro comprou 2 sorvetes e Lucas 3, totalizando R$27. Se cada sorvete custa o mesmo, quanto custou cada um?",
            "Em uma venda, 4 cadernos e 2 canetas custam R$18. Se cada caneta custa R$2, quanto custa cada caderno?",
            "João tem R$60. Ele compra 3 camisetas por R$15 cada e o resto em chapéus. Quanto custou cada chapéu se ele ficou com R$3?",
            "Em uma promoção, 5 chocolates e 3 balas custam R$12. Se cada bala custa R$1, quanto custa cada chocolate?",
            "Uma escola organizou um evento. Para 50 ingressos e 20 lanches, o custo foi de R$800. Se cada ingresso custa R$10, quanto custa cada lanche?",
            "Maria comprou 6 pacotes de biscoito e 3 de bolacha por R$30. Se cada pacote de biscoito custa R$2, quanto custa cada pacote de bolacha?",
            "No zoológico, 2 ingressos e 4 refrigerantes custam R$60. Se cada refrigerante custa R$5, quanto custa cada ingresso?",
            "Em uma feira, 5 flores e 2 vasos custam R$35. Se cada flor custa R$3, quanto custa cada vaso?",
            "Uma loja vende 3 pares de meias e 2 camisetas por R$50. Se cada par de meia custa R$5, quanto custa cada camiseta?",
            "Ana e Beatriz foram ao parque. Ana gastou R$20 em frutas e Beatriz R$30 em picolés. Se juntas elas gastaram R$70, quanto custou a entrada do parque?",
            "No cinema, 2 ingressos e 3 pipocas custam R$45. Se cada pipoca custa R$5, quanto custa cada ingresso?",
            "Uma festa vendeu 4 tipos de salgados e 3 doces por R$100. Se cada tipo de doce custa R$8, quanto custa cada salgado?",
            "Ricardo e Júlia compraram 3 livros e 2 revistas por R$70. Se cada livro custa R$20, quanto custa cada revista?",
            "No mercado, 6 kg de arroz e 3 kg de feijão custam R$90. Se 1 kg de arroz custa R$10, quanto custa 1 kg de feijão?",
            "Uma gráfica fez 200 cartões e 50 panfletos por R$400. Se cada panfleto custa R$2, quanto custa cada cartão?",
            "Paula e Roberto compraram 4 pizzas e 3 refrigerantes por R$90. Se cada refrigerante custa R$10, quanto custa cada pizza?",
            "Em um evento, 5 camisetas e 4 bonés custam R$200. Se cada boné custa R$15, quanto custa cada camiseta?",
            "No mercado, 3 pacotes de arroz e 2 pacotes de açúcar custam R$45. Se cada pacote de arroz custa R$10, quanto custa cada pacote de açúcar?",
            "Um grupo de amigos comprou 6 latas de cerveja e 4 refrigerantes por R$70. Se cada refrigerante custa R$5, quanto custa cada lata de cerveja?",
            "Na lanchonete, 3 lanches e 5 sucos custam R$45. Se cada suco custa R$5, quanto custa cada lanche?",
            "Carlos e seu irmão compraram 2 videogames e 1 controle por R$800. Se cada videogame custa R$350, quanto custa o controle?",
            "Em uma promoção, 4 chocolates e 3 doces custam R$30. Se cada doce custa R$2, quanto custa cada chocolate?",
            "No zoológico, 3 ingressos e 2 guias custam R$80. Se cada guia custa R$10, quanto custa cada ingresso?",
            "Uma escola vendeu 6 camisetas e 4 bonés por R$120. Se cada boné custa R$15, quanto custa cada camiseta?"
        ]
    };

    const usedQuestions = new Set();
    const buttons = document.querySelectorAll(".btn");
    const questionText = document.getElementById("questionText");
    const questionModal = new bootstrap.Modal(document.getElementById("questionModal"));
    const startTimerBtn = document.getElementById("startTimerBtn");
    const fecharModalBtn = document.getElementById("fecharModalBtn");

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

    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        const intervalId = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            startTimerBtn.textContent = `${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(intervalId);
                startTimerBtn.textContent = "Iniciar Timer";
                alert("Tempo esgotado!");
            }
        }, 1000);
    }
});