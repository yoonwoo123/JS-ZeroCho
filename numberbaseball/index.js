const input = document.querySelector("#input")
const check = document.querySelector("#check")
const logs = document.querySelector("#logs")

// 답인 answer 를 미리 만들어두자.
let answer = []
let numbers = Array(10).fill().map((v, i) => i)

for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * (10 - i))
    answer.push(numbers[index])
    numbers.splice(index, 1)
}
console.log(answer)

let count = 0
check.addEventListener('click', () => {
    const value = input.value
    count += 1
    if (count > 10) {
            logs.appendChild(document.createTextNode(`Game Over, answer = ${answer}`))
    } else if (value && value.length === 4) { // 엠퍼센드 AND 연산자 / 보호연산자
        if (answer.join('') === value) {
            console.log('같다');
            logs.append('HR', document.createElement('br'))
        } else {
            console.log('다르다')
            let strike = 0;
            let ball = 0;
            for (const [iindex, number] of answer.entries()) {
                for (const [jindex, input] of value.split('').entries()) {
                    console.log(iindex, number, jindex, input)
                    if (number === Number(input)) {
                        if (iindex === jindex) {
                            strike += 1
                        } else {
                            ball += 1
                        }
                    }
                }
            }
            logs.append(`${value}: ${strike} strike ${ball} ball`, document.createElement('br'))
        }       
    }

})