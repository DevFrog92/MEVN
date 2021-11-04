// functional programming
// 1. 함수형 프로그래밍은 작은 순수함수들을 블록 쌓듯이 로직을 구현하고 최소의 부수효과, 고차함수를 활용해 재사용성을 높인 프로그래밍 패러다임
// 2. null, undefined등을 확인해서 타입 안정성을 확보할 수 있다.
// 3. 순수함수 : 같은 입력에 대해서는 같은 출력값을 반환해야한다.
// 4. 고차함수 : 함수가 다른 함수를 매개변수로 받아서 어떤 로직을 샌성하는 함수이다.
// 5. 모나드함수 : 어떤 값을 받아 새로운 값을 반환하는 함수이다.
// 6. 커링(currying) : 어떤 함수의 예상되는 매개변수의 수 보다 적은 수의 매개변수가 전달되면 함수를 실핼하지 않고, 모든 매개변수가 들어오면 함수를 실행하는 방법

// ramda for currying
const R = require('ramda')
const a = R.add(1)
const b = a(2)

console.log(b)

const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumber = R.curry(addFourNumbers)
const f = curriedAddFourNumber(1, 2)
const g = f(3)
console.log(g(4))

// custom currying
// 중첩 화살표 함수
const curry = fn => a => b => fn(a, b)


// fxjs
const { map, filter, pipe } = require('fxjs')
const f_pipe = pipe(
  map(a => a + 1),
  filter(a=>a%2)
)
const _ret = f_pipe([1, 2, 3, 4])

// Point-free, 무인수프로그래밍
