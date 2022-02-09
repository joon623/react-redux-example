// 제네레이터
// 일반 함수는 하나의 값만을 반환하다. 혹은 0개
// 하지만 제너레이터를 사용하면 여러 개의 값을 필요에 따라 반환(yield)할 수 있다.
// 제네레이터와 이터러블 객체를 함께 사용하면 솝쉬게 데이터 스트림을 만들 수 있다.

// '제너레이터 함수'는 '제너레이터 객체'를 생성합니다.
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value); // 1, 2가 출력됨 3을 출력하려면 return이 아니라 yield를 사용해야 한다.
}

function* generaotrFunction() {
  console.log('안녕하세요?');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

// const generator = generaotrFunction();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* sumGenerator() {
  console.log('sumGenerator이 시작됐습니다.');
  let a = yield;
  console.log('a값을 받았습니다. ');
  let b = yield;
  console.log('b값을 받았습니다.');
  yield a + b;
}

const sum = sumGenerator();
// console.log(sum.next());
// console.log(sum.next(1));
// console.log(sum.next(5));
// console.log(sum.next(5));
// console.log(sum.next(5));
// console.log(sum.next());
// console.log(sum.next(1));
// console.log(sum.next(2));

function* watchGenerator() {
  console.log('모니터링 시작');
  while (true) {
    const action = yield;
    if (action.type === 'HELLO') {
      console.log('안녕하세요');
    }
    if (action.type === 'BYE') {
      console.log('안녕히 가세요');
    }
  }
}

const watch = watchGenerator();
// watch.next();
// watch.next({ type: 'HELLO' });
// watch.next({ type: 'BYE' });
