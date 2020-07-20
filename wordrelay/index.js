let word = '' // 제시어 처음엔 비어있다.
let chklist = []
document.querySelector('#button').addEventListener('click', () => {
    let newword = document.querySelector('#new').value
    let alert = document.querySelector('#alert')
    const wordlist = document.querySelector('#wordlist')
    
    if (newword == '') {
        alert.textContent = '단어를 입력 해주세요.'

    } else {
        if (chklist.includes(newword)) {
            alert.textContent = '중복된 단어입니다.'
        } else {
            alert.textContent = ''
            if (word === '') {
                wordlist.textContent += newword
                word = newword
                chklist.push(newword)

            } else if (word[word.length - 1] === newword[0] ) {
                wordlist.textContent += ' > ' + newword
                word = newword
                chklist.push(newword)

            } else {
                alert.textContent = '글자가 다릅니다.'
            }
        }
    }
    document.querySelector('#new').value = ''
    document.querySelector('#new').focus() // 클릭하지 않아도 커서가 자동으로
})