# ES2020-JavaScript #4-1

### 숫자 야구 기획하기



## #4-2 숫자야구 순서도 그리기

## #4-3 진리표와 조건문 줄이기

- `&&` 엠퍼센드가 두개면 AND 연산자이다.

- `||` OR 연산자

- if 문 내에 들어갔을 때 false가 되는 경우들은

  `''`, `0`, `NaN`, `false`, `undefined`, `null` 가 있다.



## #4-4 랜덤한 숫자 뽑기

- `Math.random() ` 은 0과 1사이의 수를 랜덤하게 뽑아준다. 이 수에 10을 곱해주면

  0~9까지의 숫자.소수점 이 될것이고 `.floor` 나 `String()[0]` 을 해주면 랜덤한 숫자 1개를 얻을 수 있다.



## #4-5 비슷한 변수 대신 배열 사용하기

- `String`과 `.toString` 의 차이는 `String`은 무조건 실행되고 `.toString`은 안되는 경우가 있으므로 대부분 `String`을 사용하는편



## #4-6 반복문 사용하기

- for문에 대해 익숙해지기 위해 반복문을 연습하자



## #4-7 별찍기 숙제

```javascript
// 1, 3, 5, 3, 1 로 뽑기
let n = 5
for (let i = -Math.floor(n/2); i <= Math.floor(n/2); i++) {
    console.log('*'.repeat(n - Math.abs(i)*2))
                }

// 다이아몬드 모양으로 별 뽑기
let n = 5
for (let i = -Math.floor(n/2); i <= Math.floor(n/2); i++) {
    console.log(' '.repeat(Math.abs(i)), '*'.repeat(n - Math.abs(i)*2), ' '.repeat(Math.abs(i)))
                }
```



## #4-8 중복없이 뽑기

- 4개의 숫자가 중복없이 뽑히려면 Math.random() * (10 - i) 를 해주며 공을 빼주면 된다.
- `배열.splice(index, 1)` 를 해주게 되면 배열의 i번째를 1개 없애준다.



## #4-9 for문과 배열 비교

- '3046'.split('') => ['3', '0', '4', '6'] 이 되며

- [3, 0, 4, 6].join('') or ['3', '0', '4', '6'].join('') => '3046'

- 배열끼리는 비교하기 힘들고 [] === [] : false 가 나온다. 

  배열끼리(객체)는 모양이 같아도 false가 나올 수 있다. 

  따라서 문자열, Number, Bool로 비교하자.

- 비교한 문자열이 완전히 일치한 경우 'HR'을 logs에 띄워주자.

  `logs.appendChild(document.createTextNode('HR'))`

  

## #4-10 스트라이크, 볼 세기

- `for of` 문은 for (const number of answer) 이런식으로 answer 에서 값 number를 하나씩 뽑아줄 수 있다.

- 배열 뒤에 `.entries()` 를 붙이면 `const [index, number]` 형태로 뽑아 낼 수 있다.

  배열 뒤에만 붙일 수 있기때문에 string인 값은 `.split('')` 으로 배열로 만들어 준 후에 `.entries()`를 붙여주자.



## #4-11 템플릿 문자열(백틱)

- 변수를 문자열과 같이 쓸 때 깔끔하게  백틱 ${strike} strke 백틱 으로 감싸주면 ${} 안의 수는 변수로 처리된다.



## #4-12 appendchild와 Q&A

- `logs.textContent = 'HR'`  : 기존 텍스트를 갈아엎는 문법

- `logs.appendChild(document.createTextNode('글자'))` : 기존 글자에 추가를 해주는 것

- `logs.appendChild(document.createElement('br'))` : 줄 바꿈 (HTML 을 JS로 조작하는 방법)

- 다른 방법으로 `logs.append('텍스트', '태그')` 를 넣어주면 된다.

  ex) br태그를 넣어서 줄바꿈을 한다면 태그에 `document.createElement('br')` 을 넣어주면 된다.

- numbers 배열 0~9까지의 배열을 직접 치지말고 for 문으로 바꿀 수 있다.

  그리고 for 문을 1줄로 만드는 식이 

  `let numbers = Array(10).fill().map((v, i) => i)`

  `Array(10).fill()` 은 빈 값이 든 10개의 배열을 생성하고

  `.map((v, i) => i)` 가 0~9 까지 넣어준다.