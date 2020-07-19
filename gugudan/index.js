document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value
    if (a) {
        if (b) {
            document.querySelector('#result').textContent = a * b
        } else {
            document.querySelector('#result').textContent = '두 번째 값을 입력해주세요.'
        }
    } else {
        document.querySelector('#result').textContent = '첫 번째 값을 입력해주세요.'
    }
})

