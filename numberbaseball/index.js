const input = document.querySelector("#input")
const check = document.querySelector("#check")
const logs = document.querySelector("#logs")
let alert = document.querySelector("#alert")

let count = 0
// 답인 answer 를 미리 만들어두자.
let answer = []
for (let i = 0; i < 4; i ++) {
    answer.push(Math.floor(Math.random() * 10)))
}

check.addEventListener('click', () => {
    const value = input.value
    count += 1
    if (count > 10) {
        alert.textContent = 'Game Over'
    } else if (value && value.length === 4) { // 엠퍼센드 AND 연산자 / 보호연산자
        if (answer.join('') === value) {

        }        
    }

})