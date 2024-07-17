const respostas = {
    equacoes_primeiro_grau: [
        6,   // 1
        5,   // 2
        6,   // 3
        5,   // 4
        8,   // 5
        6,   // 6
        6,   // 7
        7,   // 8
        7,   // 9
        7,   // 10
        7,   // 11
        7,   // 12
        4,   // 13
        8,   // 14
        6,   // 15
        { x: 3, y: 1 }, // 16
        { x: 1, y: -1 }, // 17
        { x: 2, y: 1 }, // 18
        { x: 2, y: -1 }, // 19
        { x: 2, y: 1 }, // 20
        { x: 2, y: 1 }, // 21
        { x: 2, y: 1 }  // 22
    ],
    equacoes_segundo_grau: [
        { x1: 1, x2: -3 }, // 23
        { x1: 3, x2: 2 },  // 24
        { x1: 1, x2: -4 }, // 25
        { x1: 5, x2: 2 },  // 26
        { x1: 1, x2: -5 }, // 27
        { x1: 5, x2: 4 },  // 28
        { x1: 1, x2: -6 }, // 29
        { x1: 10, x2: 3 }, // 30
        { x1: 1, x2: -7 }, // 31
        { x1: 9, x2: 4 },  // 32
        { x1: 1, x2: -8 }, // 33
        { x1: 10, x2: 5 }, // 34
        { x1: 1, x2: -9 }, // 35
        { x1: 12, x2: 5 }, // 36
        { x1: 1, x2: -10 }, // 37
        { num1: 5, num2: 7 }, // 38
        { num1: 15, num2: 7 }, // 39
        { num1: 10, num2: 2 }, // 40
        { lados: { a: 7, b: 10 } }, // 41
        "Triângulo" // 42
    ],
    contas_numeros_grandes: [
        6912,  // 43
        4444,  // 44
        41472, // 45
        19753, // 46
        102357, // 47
        55445, // 48
        227156, // 49
        54321, // 50
        469134, // 51
        222222, // 52
        1370367, // 53
        135782, // 54
        1134690, // 55
        66656, // 56
        1407402, // 57
        612090, // 58
        404050, // 59
        1818180, // 60
        33670, // 61
        999999, // 62
        1111111, // 63
        1234561, // 64
        111111, // 65
        2104320, // 66
        44334  // 67
    ],
    probleminhas: [
        10,  // 68
        8,   // 69
        9,   // 70
        12,  // 71
        { num1: 18, num2: 19 }, // 72
        17,  // 73
        8,   // 74
        12,  // 75
        18,  // 76
        { num1: 18, num2: 19, num3: 20 } // 77
    ],
    problemas_uma_variavel: [
        8,   // 78
        24,  // 79
        9,   // 80
        { joao: 40, maria: 20 }, // 81
        { num1: 25, num2: 15 }, // 82
        9,   // 83
        80,  // 84
        { num1: 20, num2: 21, num3: 22 }, // 85
        6,   // 86
        10,  // 87
        10,  // 88
        10,  // 89
        { num1: 20, num2: 10 }, // 90
        20,  // 91
        { x: 7, y: 6 }, // 92
        10,  // 93
        12,  // 94
        16   // 95
    ],
    problemas_duas_variaveis: [
        { cadeiras: 10, tamboretes: 3 }, // 96
        { cidadeA: 150000, cidadeB: 50000 }, // 97
        { notas20: 7, notas5: 3 }, // 98
        { pequenos: 5, grandes: 3 }, // 99
        { num1: 2, num2: -1 }, // 100
        { num1: 23, num2: 14 }, // 101
        { bicicletas: 8, skates: 10 }, // 102
        { lapis: 3, estojo: 2 }, // 103
        { mulheres: 30, homens: 60 }, // 104
        { cadeiras: 5, mesas: 10 }, // 105
        { rosas: 15, tulipas: 9 }, // 106
        { cadernos: 6, canetas: 4 }, // 107
        { adultos: 20, criancas: 30 }, // 108
        { galinhas: 60, vacas: 20 }, // 109
        { matematicas: 30, fisicas: 10 }, // 110
        { ana: 23, beatriz: 17 }, // 111
        { meninos: 130, meninas: 170 }, // 112
        { meninos: 130, meninas: 170 }, // 113
        { leoes: 33, tigres: 17 }, // 114
        { onibus: 80, metro: 20 }, // 115
        { joao: 40, pedro: 20 }, // 116
        { vermelhas: 50, azuis: 30 }, // 117
        { homens: 45, mulheres: 75 }, // 118
        { macas: 20, bananas: 50 }, // 119
        { carros: 60, motos: 20 }, // 120
        { meninos: 200, meninas: 300 }, // 121
        { elefantes: 20, leoes: 10 }, // 122
        { operarios: 190, supervisores: 10 }, // 123
        { macas: 175, laranjas: 125 }, // 124
    ],
    surpresinha: [
        6,   // 125
        23,  // 126
        'Tio e sobrinho', // 127
        { irmaos: 1, irmas: 1 }, // 128
        400, // 129
        { pai: 36, filho: 12 }, // 130
        'Maria', // 131
        5,   // 132
        { filhos: 2, filhas: 2 }, // 133
        { vermelhos: 10, azuis: 30 }, // 134
        { milho: 100, soja: 50 }, // 135
        { timeA: 30, timeB: 10 }, // 136
        80,  // 137
        60,  // 138
        { meninos: 12, meninas: 18 }, // 139
        { ovelhas: 60, cabras: 30 }, // 140
        15,  // 141
        20,  // 142
        { matematica: 4, fisica: 2 }, // 143
        8,   // 144
        { galinhas: 16, patos: 8 }, // 145
        { notas50: 300, notas100: 100 }, // 146
        { joao: 30, maria: 15 }, // 147
        { frutas: 112, verduras: 38 }, // 148
        40 // 149
    ]
};
