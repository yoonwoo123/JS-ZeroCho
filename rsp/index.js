const computerTag = document.querySelector('#computer')
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  0 0`

const rspCoord = {
    rock: '0px',
    scissors: '-143px',
    paper: '-286px',
}

const intervalMaker = () => {
    return setInterval(() => {
        if (computerChoice === 'rock') {
            computerChoice = 'scissors'
        } else if (computerChoice === 'scissors') {
            computerChoice = 'paper'
        } else if (computerChoice ==='paper') {
            computerChoice = 'rock'
        }
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${rspCoord[computerChoice]} 0`
    }, 50)
}

let computerChoice = 'rock'
let intervalId = intervalMaker()

const rockTag = document.querySelector('#rock')
const scissorsTag = document.querySelector('#scissors')
const paperTag = document.querySelector('#paper')

/* 가위: 1, 바위: 0, 보: -1
    나\컴퓨터 가위 바위 보
    가위           0      1     2
    바위          -1      0     1
    보             -2     -1     0

    2, -1 은 이김, 0은 비김, 1, -2는 짐 이렇게
    규칙을 찾아낼 수 있다!
*/
const score = {
    rock: 0,
    scissors: 1,
    paper: -1,
}

const scoreTag = document.querySelector('#score')

const clickButton = (myChoice) => () => {
    clearInterval(intervalId)
    const myScore = score[myChoice]
    const comScore = score[computerChoice]
    const diff = myScore - comScore
    let accScore = Number(scoreTag.textContent)
    if (diff === 2 || diff === -1) {
        accScore += 1
    } else if (diff === 1 || diff === -2) {
        accScore -= 1
    }
    scoreTag.textContent = accScore
    setTimeout(() => {
        intervalId = intervalMaker()
    }, 1000)
}

//                                                이 부분은 함수가 return 되야함
rockTag.addEventListener('click', clickButton('rock'))
scissorsTag.addEventListener('click', clickButton('scissors'))
paperTag.addEventListener('click', clickButton('paper'))