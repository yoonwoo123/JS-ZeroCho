const numberInput = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const calculateButton = document.querySelector('#calculate');
const resultInput = document.querySelector('#result');

let temp
let operator

plusButton.addEventListener('click', () => {
    operator = '+'
    if (temp) {
    } else if (numberInput.value) {
        temp = numberInput.value
    }
    numberInput.value = null
    resultInput.value = null
})

minusButton.addEventListener('click', () => {
    operator = '-'
    if (temp) {
    } else if (numberInput.value) {
        temp = numberInput.value
    }
    numberInput.value = null
    resultInput.value = null
})

multiplyButton.addEventListener('click', () => {
    operator = '*'
    if (temp) {
    } else if (numberInput.value) {
        temp = numberInput.value
    }
    numberInput.value = null
    resultInput.value = null
})

divideButton.addEventListener('click', () => {
    operator = '/'
    if (temp) {
    } else if (numberInput.value) {
        temp = numberInput.value
    }
    numberInput.value = null
    resultInput.value = null
})

clearButton.addEventListener('click', () => {
    // 보통 초기화는 null 로 해준다
    numberInput.value = null
    resultInput.value = null
    temp = null
    operator = null
})

calculateButton.addEventListener('click', () => {
    console.log(temp, operator, numberInput.value)
    if (operator) {
        if (numberInput.value) {
            if (operator === '+') {
                resultInput.value = Number(temp) + Number(numberInput.value)
            } else if (operator === '-') {
                resultInput.value = Number(temp) - Number(numberInput.value)
            } else if (operator === '*') {
                resultInput.value = Number(temp) * Number(numberInput.value)
            } else if (operator === '/') {
                if (numberInput.value !== 0) { 
                resultInput.value = Number(temp) / Number(numberInput.value)
                }
            }
            temp = resultInput.value
            numberInput.value = null
        }
    } else if (numberInput.value) {
            resultInput.value = temp
        }
})