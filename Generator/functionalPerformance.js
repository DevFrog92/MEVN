// parseInt vs bite operator
// 비트 연산의 결과는 32비트 정수로 반환된다는 ECMA 5 스펙에 따라서 ~~ 연산을 통해 실수를 정수형으로 바꿀 수 있다.
let b
for (let i = 0; i < 10000; i++){
  let a = 123.45678
  b = parseInt(a)
  console.log(b)
}

for (let i = 0; i < 10000; i++){
  let a = 123.45678
  b = ~~(a) // winer
  console.log(b)
}

// includes and indexOf

// object copy

// spread and object.assign by depth level 1
const a = { "b": 1 }
let bb = { ...a }
let c = Object.assign({}, a)
c.b = 3
bb.b = 3
console.log(a, bb, c)

const copy = o => {
  let out = {}
  let value, key
  for (key in o) {
    value = o[key]
    out[key] = (typeof value === "object" && value != null) ? copy(value) : value
  }
  return out
}

const aa = {
  "b": 1,
  "c": {
    "d":2
  }
}

let bbb = copy(aa)
bbb.c.d = 4
let ccc = JSON.parse(JSON.stringify(aa))
ccc.c.d = 10
console.log(aa, ccc)

// What is JSON?
// JSON(Javascript Object Notation) - 경량 데이터 교환방식
// 읽고 쓰기 쉽고, 직렬화와 파싱이 쉽다.