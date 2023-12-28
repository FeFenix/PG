// Повзунок
function updateLength() {
    const lengthInput = document.getElementById('length');
    const lengthSlider = document.getElementById('lengthSlider');
    lengthInput.value = lengthSlider.value;
}

document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length');
    lengthInput.value = 13; // Встановлюємо значення за замовчуванням
});

// Функція для виконання арифметичних операцій
function performArithmeticOperation(operand1, operator, operand2, modifier) {
    switch (operator) {
        case '+':
            return operand1 + operand2 + modifier;
        case '-':
            return operand1 - operand2 + modifier;
        case '*':
            return operand1 * operand2 * modifier;
        case '/':
            return operand1 / operand2 * modifier;
        default:
            throw new Error(`Unsupported operator: ${operator}`);
    }
}

function performRandomOperations() {
    // 1. Window
    // Отримання розмірів вікна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Обчислення діагоналі екрану та діаметра прямокутника
    const diagonalScreen = Math.sqrt(windowWidth ** 2 + windowHeight ** 2);
    const rectangleDiameter = Math.sqrt(windowWidth * windowHeight) / 2;

    // Вибір випадкових операцій
    const operations = ['+', '-', '*', '/'];
    const randomOperation1 = operations[Math.floor(Math.random() * operations.length)];
    const randomOperation2 = operations[Math.floor(Math.random() * operations.length)];

    // Генерація випадкового числа з модифікатором
    const randomNegativePositive = Math.random() < 0.5 ? -1 : 1;
    const m0dn4R = Math.floor(Math.random() * 357896214 + 1) * randomNegativePositive;

    // Використання функції для виконання арифметичних операцій
    const operation1Result = performArithmeticOperation(diagonalScreen, randomOperation1, rectangleDiameter, m0dn4R);
    const operation2Result = performArithmeticOperation(operation1Result, randomOperation2, windowWidth, m0dn4R);

    // Отримання цілої частини результату
    const operation2ResultIntegerPart = parseInt(operation2Result);

    // Виведення результату на екран
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>1. ${operation2ResultIntegerPart}</p>
`;
}

function generateDeeS() {
    const operation2ResultIntegerPart = performRandomOperations();

    // Використовуємо значення operation2ResultIntegerPart для створення "deeS"
    const deeSArray = new Uint8Array(new Float64Array([operation2ResultIntegerPart]).buffer);
    const deeS = Buffer.from(deeSArray).toString('hex');

    console.log("deeS:", deeS);
    return deeS;
}

function generateRandomString() {
    const characters = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        specialCharacters: '!@#$%^&*()_+=-'
    };

    const selectedCharacters = Object.keys(characters)
        .filter(key => document.getElementById(key).checked)
        .map(key => characters[key])
        .join('');

    const length = document.getElementById('length').value;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
    }
    document.getElementById('result').textContent = result;
}

function copyToClipboard() {
    const resultElement = document.getElementById('result');
    const textarea = document.createElement('textarea');
    textarea.value = resultElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
