// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text');
    const display = document.getElementById('display');

    textInput.addEventListener('input', () => {
        const inputValue = textInput.value;
        const isValid = /^[\u4E00-\u9FFF]{3}$/.test(inputValue); // 漢字三文字の正規表現

        if (isValid) {
            display.textContent = inputValue;
            display.style.color = 'white';
        } else {
            display.textContent = '漢字三文字を入力してください';
            display.style.color = 'red';
        }
    });
});
