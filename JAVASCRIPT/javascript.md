# Javascript
***

21.10 웹 기초 재정립 Javascript , 공부할 때마다 채워넣기  
  
몰랐거나 중요한 개념 기록, 기타 내용 정리

***

#### Concept
  
  - Call stack (How js function works)

  - primitive types 
    - no object, no method
    - string, number, bigint, boolean, undefined, symbol, null

  - type coersion(conversion)

    ```JAVASCRIPT
      console.log(66+1) -> 67
      console.log(66+true) -> 67
      console.log(55 * false) -> 0
      console.log(66 + "false") -> 66false
      console.log(25 - "1") -> 24
      console.log(""==true) -> false (""->0)
      // "==="를 사용하면 type coersion이 일어나지않음
      // "=="이 boolean을 만나면 숫자로 변환
      console.log("1"==1) => true
      console.log("1"===1) => false
      // null, undefined, NAN -> false 
    ```
  - scope (Function, Block, Lexical, Global)
    - Access variables

  - Expression vs Statement
    - Expression returns a value(undefined without return)
    - variable saves expression
    - All declaration moves to top ( hoisting )
    ```JAVASCRIPT
      // No hoisting(as expression)
      const add = (a,b) => a+b;    
    ```
  - Message Queue, event loop
    - blocking, non blocking 
    - Message from web api(browser)
    - js get things from queue if stack is empty

  - IIFE, Modules, Namespaces
    - webpack, gulp ( Browser cannot understand import, export )
  
  - Engines
  - Promises
  - Async/await
  - Inheritance, Polymorphism
  - Design patterns
  - High order functions

***
   
#### Contents

  - ``hoisting`` : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것으로 처리

      - let과 const도 ``hoisting``되지만 TDZ(Temporal Dead zone)의 영향을 받음
      - 선언만되고 할당은 hoisting되지않음
      - let과 var는 선언 후 나중에 할당가능, const는 선언+초기화+할당 한번에 (값이 변하지 않기 때문)
  - ``var``
    - no var anymore (ES6)
    - var는 ``hoisting``됨
  
  - ``scope`` 
    - let, const는 block-scoped(for, if try catch etc)

  - ``생성자 함수``
  ```JAVASCRIPT
   //new가 어떻게 동작하는가, 함수명 첫 문자 대문자
    function User(name, age){
      //this = {}
      this.name = name;
      this.age = age;
      //return this;
    }
    const user1 = new User("uuuu",30)
  ```
  - ``Computed property``
  
  - ``Object``
    ```JAVASCRIPT
      const user = {
        name : 'Song'
        age : 29
      }
      //이 user에는 값이 아닌 객체 메모리 참조값이 저장됨
      // const copyUser = user -> 메모리 주소가 저장, 복제x
    ```
    - Object.assign() (객체 복제, 병합 등)
    - keys() , values() , entries() , fromEntries()

  - ``Symbol``
    - symbol은 유일성 보장 (== or === false)
    - const id = Symbol('id'); -> 설명을 덧 붙일 수 있음
    - Symbol.for() -> 하나의 심볼 보장 없으면 만들고, 있으면 가져옴
    ```JAVASCRIPT
      const id1 = Symbol.for('id');
      const id2 = Symbol.for('id');
      //id1 === id2 -> true
    ```
    - 활용법 다시 공부하기
    ```JAVASCRIPT
      //타 개발자
      const user = {
        name : "Song",
        age : 29,
      };
      //내 코드
      const showName = Symbol("show name");
      user[showName] = function (){
        console.log(this.name);
      }
      user[showName]();

      for (let key in user){
        console.log(`His` ${key} is ${user[key]}.`)
      }
    ```
  - ``number, math, method``
    - toString()
    - Math.ceil(), floor(), round(), toFixed(소수점 자리 개수, 넘으면 0으로 채움, **문자열반환**), random()
    - isNaN(), parseInt(str,진수), parseFloat(), max(), min(), abs(), pow(n,m), sqrt()

  - ``String``
    ```javascript
    // "", '', `` 차이점
    ```
***

#### Memo & Keyword

  - undefined 와 null에 대한 이해
  - const, let ( var )
  - hoisting
  - value types & reference types
  - "==" , "==="
  - Typeof(null이 object..?) , Instanceof(work array, object but not primitive types)
***

#### Reference

- [노마드코더 유튜브](https://www.youtube.com/watch?v=dIIQmSsg0SI) 