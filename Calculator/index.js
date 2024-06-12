const onScreen = document.getElementById('screen-input');



function pushToScreen(input) {
    onScreen.value += input;
}

function clearScreen() {
    onScreen.value = ''
}

function calculate() {
    try {
        onScreen.value = eval(onScreen.value)
        }
        catch(error) {
            onScreen.value = 'error';
        }
    }