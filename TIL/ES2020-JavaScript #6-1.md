# ES2020-JavaScript #6-1

### 가위바위보와 setInterval

- 비동기 코드란?

  모든 코드는 위에서부터 아래로 바로 실행이 되는데 

  비동기의 경우 나중에 따로 실행이 될 수 있는 코드들을 의미한다.

  ex) userEvent, Timer, setInterval 등등 

- 이미지 스프라이트 기법 : 예전 HTTP 1.1이었을 경우에는 이미지를 여러 장 한번에 받는 것이 브라우저에서는 매우 힘든 작업이었다. 그래서 이때는 여러 장의 그림을 하나로 합쳐서 하나의 이미지로 받은 후 거기서 쪼개 쓰는 기법이었다. 요새는 HTTP2.0 이상부터는 이미지를 여러 개 받는데 어렵지 않아서 상관없게 되었다.

- 이번 강의는 이미지 스프라이트 기법을 사용하였다.

- 이미지를 불러올 때

  ```html
  <style>
      #computer {
          ...
      }
  </style>
  
  ...
  
  <div id="computer">
      <img src="" alt="">
  </div>
  ```

  

  ```javascript
  const computerTag = document.querySelector('#computer')
  computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  0 0`
  
  // 이렇게 html에 id가 computer인 것을 찾아서 .style.background 로 스타일 태그에 접근하여 background를 `url(주소)` 로 나타내었다.
  ```

- `setInterval(() => {}, 1000) ` 은 `setTimeout` 을 일정간격(1000 = 1초)마다 계속 동작시키는 함수이다. 



## #6-2 객체 사용하기

- Python의 딕셔너리와 같은 것이다.

  ```javascript
  const rspCoord = { // dict므로 중괄호로 묶인다.
      rock: '0',
      scissors: '-142px',
      paper: '-248px',
  }
  
  rspCoord['rock'] === rspCoord.rock 은 같다.
  그러나 rspCoord[] 방식은 안에 변수를 집어넣어서 해도 읽어올 수 있고
  rspCoord. 방식은 그 객체안에 있는 변수만 가능하다.
  예를 들어서
  const rsp = 'rock'
  rspCoord[rsp] // O 이렇게 변수로 불러오기 가능
  rspCoord.rsp // X 변수를 직접 하는 것 불가능
  ```



## #6-3 가위바위보 승부 규칙 찾기

```javascript
/* 가위: 1, 바위: 0, 보: -1
    나\컴퓨터 가위 바위 보
    가위           0      1     2
    바위          -1      0     1
    보             -2     -1     0

    2, -1 은 이김, 0은 비김, 1, -2는 짐 이렇게
    규칙을 찾아낼 수 있다!
*/
이런식으로 규칙을 만들어낸다면 함수를 하나로 압축해 줄 수 있다.
```



## #6-4 고차함수로 중복 제거하기!

```javascript
const clickButton = (myChoice) => {
    return () => {
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
    }
}

rockTag.addEventListener('click', clickButton('rock'))
scissorsTag.addEventListener('click', clickButton('scissors'))
paperTag.addEventListener('click', clickButton('paper'))
/* 이 부분에서 이벤트리스너의('click', 함수부분) 이므로 clickButton이라는 함수가 return 하는 것이 함수여야 한다. 평상 시 함수는 return 값이 없으면
undefined를 리턴하기 때문에 함수를 리턴해주기 위해서 고차함수로 만들어주었다.
clickButton이 myChoice를 인자로 받고 실행이 되면 return () => { 함수 }
가 리턴이 되어 결과적으로 함수가 통째로 return 이 된다.
여기서 return이 바로오면 return이라는 글자를 생략할 수 있으므로
최종적으로는 이렇게 된다. */

								// return 이 생략됨
const clickButton = (myChoice) => () => {
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
}

```



## #6-5 가위바위보 마무리하기

- 가위바위보 경기를 하면 컴퓨터의 결과가 뭐였는지 잠깐 멈춰주는 기능을 만들어주자

```javascript
setInterval(() => {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors'
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper'
    } else if (computerChoice ==='paper') {
        computerChoice = 'rock'
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${rspCoord[computerChoice]} 0`
}, 100)

// 원래 이런 기존의 코드에서 setInterval에 변수명을 부여할 수 있다.

let intervalId = setInterval(() => {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors'
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper'
    } else if (computerChoice ==='paper') {
        computerChoice = 'rock'
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${rspCoord[computerChoice]} 0`
}, 100)

/* 그 후 setInterval을 멈추고 싶은 부분에서
clearInterval(intervalId) 를 해주면 Interval이 정지된다.
그 후 다시 Interval을 시작하고 싶을 때는 위에있는 interval을 다시 언급하여
재실행 해주면 된다. 그러나 이 중복도 없애기 위해 setInterval을 함수로 만들자*/

const intervalMaker = () => {
    // 여기서 또한 intervalId 에 setInterval 함수가 들어가야 하므로
    // return 을 붙여준다.
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
let intervalId = intervalMaker()

이렇게 한다면 나중에 intervalId = intervalMaker() 만 해주면
다시 interval이 실행되게끔 만들 수 있다.
```



## #6-6 Q&A

- 바로 실행되는 코드와 비동기(addEventListener 등) 코드를 나눠서 해주는 것이 좋다.
- 고차함수 개념은 많이 쓰일 것이므로 꼭 숙지해두자 함수 return의 default는 undefined 이다. 이것은 python 함수 return 기본값이 null 인것과 비슷한 개념

- VSCODE 말고 WebStorm 을 쓰면 장점이 대규모 프로젝트를 할때는 웹스톰이 정말 좋다. 코드 중복 제거, 리팩토링 등을 자주 해야 할 경우에 정말 편리한 툴이다.

  다만 유료 1년에 5만원이지만 돈 값을 톡톡히 한다.

  Refactor -> move 등의 기능이 정말 좋으므로 이 기능을 쓸거라면 웹스톰이 굿

- 객체지향형 프로그래밍과 함수형 프로그래밍, 절차형 프로그래밍이 있는데 물론 객체지향형 프로그래밍이 더 많이 쓰이기도 하나 제로초님 본인은 함수형 프로그래밍을 좋아하는 편이라 그런쪽으로 짜려고 한다. 나 같은 경우도 함수형으로 짜는 것이 좋고 편하다고 생각이 든다. 절차형 프로그래밍은 중복이 많이 발생할 수 있다.