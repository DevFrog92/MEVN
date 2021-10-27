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

// recursion
// spread and object.assign