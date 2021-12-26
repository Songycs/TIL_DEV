# ES6+ / Modern

ECMAScript6+

## `ES6`

- const & let
  - 둘 다 `block scope`임에 유의
  - const -> 선언 정의 할당 동시, 변경 불가
  - var는 hoisting됨을 유의
  - let은 재할당 가능

- Arrow function
  ```js
  // ES6 화살표 함수
  const myFunc = (name) => {
    return `안녕 ${name}`;
  }

  console.log(myFunc('영희')); // 출력 => 안녕 영희

  // 또는 화살표를 사용하거나 'return' 키워드를 사용하지 않아도 됩니다
  const myFunc = (name) => `안녕 ${name}`;

  console.log(myFunc('영희')); // 출력 => 안녕 영희
  ```
  - map, filter, reduce 등 내장함수에 활용 가능

- Template literals
  - 문자열을 + 연산자 대신 백틱(`)을 활용해 문자열 내 변수 활용
  ```js
  // ES6
  const myFunc = (name, age) => {
    return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
  };

  console.log(myFunc1('영희', 22));
  // 출력 => 안녕 영희, 너의 나이는 22살 이다!
  ```

- Default parameters
  - 매개변수에 기본값을 정의함
  ```js
  const myFunc = (name, age = 22) => {
    return `안녕 ${name} 너의 나이는 ${age}살 이니?`;
  };

  console.log(myFunc1('영희'));
  // 출력 => 안녕 영희 너의 나이는 22살 이니?
  const myFunc = (name, age) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`;
  };
  console.log(myFunc1('영희'));
  // 출력 => 안녕 영희 너의 나이는 undefined살 이니?
  ```

- Array and object destructing
  - `비구조화`로 배열, 객체 값을 변수에 더 쉽게 할당
  - 속성 이름과 동일하지 않은 변수를 할당하면 undefined가 할당됨.
  - 변수 이름을 `콜론(:)`으로 변경 가능
  ```js
    const contacts = {
    famillyName: '이',
    name: '영희',
    age: 22
  };

  let { famillyName, name, age } = contacts;
  let { famillyName, name: ontherName, age } = contacts;

  //배열
  const arr = ['광희', '지수', '영철', 20];

  let [value1, value2, value3] = arr;
  ```

- Import and Export
  ```js
  export default function detail(name, age) {
	  return `안녕 ${name}, 너의 나이는 ${age}살 이다!`;
  }

  import { detail, userProfile, getPosts } from './detailComponent';

  console.log(detail('영희', 20));
  console.log(userProfile);
  console.log(getPosts);
  ```

- Promises
  - 비동기 코드를 작성하는 방법
  - fetch함수는 promise자체를 반환함.
  ```js
  const myPromise = () => {
	  return new Promise((resolve, reject) => {
		  resolve('안녕하세요 Promise가 성공적으로 실행했습니다');
    });
  };

  cosole.log(myPromise());
  // Promise {<resolved>: "안녕하세요 Promise가 성공적으로 실행했습니다"}

  const url = 'https://jsonplaceholder.typicode.com/posts';
  const getData = (url) => {
    return fetch(url);
  };

  getData(url).then(data => data.json()).then(result => console.log(result));
  ```

- Rest Parameter(나머지 매개변수) & Spread operator(확산 연산자)
  - Rest parameter -> 배열의 인수를 가져오고 새 배열 반환
    ```js
    const arr = ['영희', 20, '열성적인 자바스크립트', '안녕', '지수', '어떻게 지내니?'];

    // 비구조화를 이용한 값을 얻기
    const [ val1, val2, val3, ...rest ] = arr;

    const Func = (restOfArr) => {
      return restOfArr.filter((item) => {return item}).join(" ");
    };

    console.log(Func(rest)); // 안녕 지수 어떻게 지내니?
    ```
  - spread operator -> 인수뿐 아니라 배열자체를 가짐, for등의 메소드 대신 spread활용가능
    ```js
    const arr = ['영희', 20, '열성적인 자바스크립트', '안녕', '지수', '어떻게 지내니?'];

    const Func = (...anArray) => {
      return anArray;
    };

    console.log(Func(arr));
    // 출력 => ["영희", 20, "열성적인 자바스크립트", "안녕", "지수", "어떻게 지내니?"]
    ```

- Classes
  - OOP, 캡슐화, 코드구조 개선
  ```JS
    class myClass {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      sayHello() {
        console.log(`안녕 ${this.name} 너의 나이는 ${this.age}살이다`);
      }
    }

    // myClass 메서드 및 속성 상속
    class UserProfile extends myClass {
      userName() {
        console.log(this.name);
      }
    }

    const profile = new UserProfile('영희', 22);

    profile.sayHello(); // 안녕 영희 너의 나이는 22살이다.
    profile.userName(); // 영희
  ```
## `ES7(2016)`
- Array.prototype.includes()
- Exponentiation Operator(제곱연산자)

## `ES8(2017)`
- Object.values() / Object.entries()
- String Padding
- Object.getOwnPropertyDescriptors(object, property)
- Trailing commas(final commas)
- Async Functions(async, await..)

## `ES9(2018)`
- Rest/Spread Properties(object literal)
- Promise.prototype.finally
- Asynchronous Iteration

## `ES10(2019)`
- Optional catch binding
- Symbol.prototype.description
- Object.fromEntries()
- String.prototype.trimStart()/trimEnd()
- Array.prototype.flat()/ flatMap() -> depth 1만

## `ES11(2020)`
- Optional chaining
- Nullish coalescing Operator
- globalThis
- Dynamic import
- BigInt
- String.proptotype.matchAll
- Promise.allSettled()

## `ES12(2021)`
- String.prototype.replaceAll()
- Promise.any()
- WeakRefs
- Logical assignment operators (논리 할당 연산자)
- Numeric separators (숫자 구분 기호)

## `Reference`
- [w3schools](https://www.w3schools.com/js/js_es6.asp)
