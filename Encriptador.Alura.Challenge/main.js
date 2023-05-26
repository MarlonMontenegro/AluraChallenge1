const regex = /^[a-z]+$/; //Regular Expression que solo acepta minusculas de la a - z sin caracteres especiales.

const buttonEncriptcion = document.getElementById('enc');
const buttonDecription = document.getElementById('des');


let resultContent = document.getElementById('result');
resultContent.style.display = 'block';
document.getElementById('result').textContent = newStr;

let originalContent = document.getElementById('original-content');
originalContent.style.display = 'none';

let keys = {
    'a': "ai",
    'e': "enter",
    'i': "imes",
    'o': "ober",
    'u': "ufat",
};

function encriptarPalabras(keys, palabra) {
    let newStr = "";

    for (let i = 0; i < palabra.length; i++) {
        let tempStr = palabra[i]
        if (tempStr in keys) {
            newStr += keys[tempStr];
        } else {
            newStr += tempStr;
        }
    }


}

function desencriptarPalabras(keys, palabraCifrada) {
    let newStr = "";
    let i = 0;

    for (let i = 0; i < palabraCifrada.length; i++) {
        let tempStr = palabraCifrada.slice(i, i + 5);
        let letra = Object.keys(keys).find(key => keys[key] === tempStr);
        newStr += letra ? letra : tempStr;
        i += letra ? 5 : 1;
    }
    document.getElementById('result').textContent = newStr;
}

function getValue() {
    var TextArea = document.getElementById('area-input');
    return TextArea.value;
}


buttonEncriptcion.addEventListener('click', function () {
    event.preventDefault();
    let valueEncript = getValue();
    encriptarPalabras(keys, valueEncript);
});

buttonDecription.addEventListener('click', function () {
    event.preventDefault();
    let valueDecript = getValue();
    desencriptarPalabras(keys, valueDecript);
});












