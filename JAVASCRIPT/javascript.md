# Javascript
***

21.10 웹 기초 다지기 Javascript , 공부할 때마다 채워넣기  
  
몰랐거나 중요한 개념 기록

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
   
#### Memo & Keyword

  - undefined 와 null에 대한 이해
  - const, let ( var )
  - hoisting
  - value types & reference types
  - "==" , "==="
  - Typeof(null이 object..?) , Instanceof(work array, object but not primitive types)
***

#### Better when 


***

#### Reference

- [노마드코더 유튜브](https://www.youtube.com/watch?v=dIIQmSsg0SI) 