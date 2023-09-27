let currentInput = '';
let history = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        history += `${currentInput} = ${result}\n`;
        document.getElementById('history').value = history;
        document.getElementById('display').value = result;
        currentInput = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
