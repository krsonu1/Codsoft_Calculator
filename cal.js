// Get the display input element
const display = document.querySelector('input[name="display"]');

// Function to handle button clicks
function handleButtonClick(event) {
    const value = event.target.value;
    if (value === 'AC') {
        display.value = '';
    } else if (value === 'DE') {
        display.value = display.value.toString().slice(0, -1);
    } else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === '.') {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    } else {
        display.value += value;
    }
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    if (key === 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === '.') {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    } else if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    }
}

// Add event listener to the document for keyboard input
document.addEventListener('keydown', handleKeyboardInput);