let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenvalue = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if (buttonText == 'AC') {
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenvalue);
        }
        else if(buttonText=='DEL'){
            screenvalue=value.substr(0,value.length-1);
            screen.value=screenvalue;
        }

        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }

    })
}

// function back() {
//     let button = documentById('button').value;
//     document.getElementById('button').value = value.substr(0, value.length - 1);
// }