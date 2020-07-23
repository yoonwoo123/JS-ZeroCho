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

