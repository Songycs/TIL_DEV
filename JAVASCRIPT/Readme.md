# Javascript
***

21.10 웹 기초 재정립 Javascript , 공부할 때마다 채워넣기

몰랐거나 중요한 개념 기록, 기타 내용 정리

21.10.23 ~

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
  ```js
  const pr = new Promise((resolve,reject) =>{
    // (resolve, reject) => callback function
  });
  ```
  ```js
  // callback hell
  const f1 = (callback) => {
    setTimeout(function (){
      console.log("1번 완료");
      callback();
    },1000);
  };
  const f2 = (callback) => {
    setTimeout(function (){
      console.log("2번 완료");
      callback();
    },2000);
  };
  const f3 = (callback) => {
    setTimeout(function (){
      console.log("3번 완료");
      callback();
    },3000);
  };

  f1(function(){
    f2(function(){
      f3(function(){
        console.log("끝");
      })
    })
  })
  ```
  ```js
  //Promise Chaining
  const f1 = (message) => {
    console.log(message);
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res("1번 주문완료");
      },1000)
    }
    )
  };
  const f2 = (message) => {
    console.log(message);
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res("2번 주문완료");
      },3000)
    }
    )
  };  const f3 = (message) => {
    console.log(message);
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res("3번 주문완료");
      },2000)
    }
    )
  };
  //f2 rej시 3 실행없이 finally
  f1()
  .then((res)=>f2(res))
  .then((res)=>f3(res))
  .then((res)=>console.log(res))
  .catch(console.log)
  .finally(()=>{
    console.log("끝");
  });
  ```
  ```JS
  //f1,f2,f3가 모두 실행 되면 promise반환, 비동기적 수행
  Promise.all([f1(),f2(),f3()]).then((res)=>{
    //이 케이스의 경우 3초가량 걸림(f2의 3)
    //하나의 rej이 그 이유를 들어 종료
    console.log(res);
  })

  //f1,f2,f3중 가장빨리 완료되는것 결과 반환, 이미지 로드등에 활용
  Promise.race([f1(),f2(),f3()]).then((res)=>{
    //이 경우 1초 걸림(f1)
    console.log(res);
  })

  ```

  - Async/await
  - Inheritance, Polymorphism
  - Design patterns
  - High order functions

***

#### Pattern & Better when

***

#### Contents

  - class
  ```js
  class User{
    //constructor, 메소드는  __proto__에 저장됨
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    showName(){
      console.log(this.name)
    }
  }
  const song = new User{"SONG",29};
  for(const x in song){
    console.log(x); // name, age -> 객체의 결과와 다름
  }
  ```

  ```js
  // class에서의 상속은 extends를 활용
  // __proto__를 따라 올라가며 필요한 멤버를 찾음
  // 동일 이름을 쓰면 덮고, 확장하려면 super()활용(Method overriding)
  class Car {
    constructor(color){
      this.color = color;
      this.wheels = 4;
    }
    drive(){
      console.log('drive');
    }
    stop(){
      console.log('stop')
    }
  }
  class Bmw extends Car{
    park(){
      console.log("PARK")
    }
    stop(){
      super.stop(); //stop
      console.log("OFF"); //OFF
    }
  }
  const z4 = new Bmw("bLue");

  //Overriding, extends는 객체 생성후 this에 할당하는 과정을 건너뜀 -> super 활용
  class Car{
    constructor(color){
      this.color = color;
      this.wheels = 4;
    }
    drive(){
      console.log('drive');
    }
  }

  class Bmw extends Car{
    constructor(color){
      super(color);
      this.navigation = 1;
    }
    park(){
      console.log("PARK");
    }
  }

  ```

  - `Call, Apply, Bind ( This 지정 ) `
  ```js
  //Call, this로 사용할 객체를 넘겨주는것, 해당 함수가 그 객체의 메소드인 것처럼 작동
  const song = {
    name: 'song';
  }
  function showThisName(){
    console.log(this.name)
  }
  showThisName.call(song); //song

  function update(birth, occu){
    this.birth = birth;
    this.occu = occu;
  }
  update.call(song, 1993, "developer");
  console.log(song)//{name:'song',birth:'1993',occu:'developer'}
  ```

  ```js
  //Apply, call 함수 매개변수를 처리하는 방식의 차이(배열)

  update.apply('song',[1993,'developer']) //{name:'song',birth:'1993',occu:'developer'}

  ```

  ```js
  //Bind
  const user = {
    name:"Song",
    showName: function(){
      console.log(`hello, ${this.name}`);
    },
  };

  let fn = user.showName;
  fn(); // -> 비어있음
  fn.call(user); // hello, Song
  fn.apply(user); // hello, Song

  let boundFn = fn.bind(user);
  boundFn(); // hello, Song
  ```

  - `__proto__`
  ```js
  // 멤버에서 먼저 찾고 없으면 __proto__에서 찾음
  const car = {
    wheels: 4,
    drive(){
      console.log("drive..");
    },
  };
  const bmw = {
    color = "red",
    navigation:1,
  }

  bmw.__proto__ = car;

  //prototype chain , 찾는게 있는곳까지 올라감
  const x5 = {
    color:"white",
    name:"x5";
  };
  x5.__proto__ = bmw;
  console.log(x5.navigation) // 1 x5->bmw
  for(x in x5){
    console.log(x)//color, name, navigtion, wheel, drive -> 전부나옴
    //object, keys, values에는 있는거만
  }

  for(x in x5){
    if(x5.hasOwnProperty(x)){
      console.log('o',x);
    }
    else{
      console.log('x',x);
    }
  }
  // 'o color', 'o name', 'x navigation', 'x wheels', 'x drive'
  ```
  ```js
  //proto 활용시, 간편함을 위한 생성자 함수 예시

    const Bmw = function(color){
      this.color = color;
    }
    Bmw.prototype.wheels = 4;
    Bmw.prototype.drive = function (){
      console.log("drive");
    };

    const x5 = new Bmw('red');
    const z4 = new Bmw('blue');

    //x5.__proto__=car;
    //z4.__proto__=car; 대신에 위의 생성자 함수 활용

    /*
    Mbw.prototype = {
      constructor: Bmw,
      wheels: 4,
      drive(){
        console.log('drive');
      },
      navigation: 1,
      stop(){
        console.log('stop');
      },
    };
    */
  ```

  - `Rest parameters`
    ```js
    //parameter가 가변적
    function showName(...names){
      console.log(names);
    }

    function add(...numbers){
      let result = numbers.reduce((prev,cur)=>prev+cur);
      //numbers.forEach((num)=>(result+=num));
      console.log(result)
    }
    add(1,2,3)
    add(1,2,3,4,5,6,7,8,9,10)

    // user 객체를 만드는 생성자 함수 예시, RP는 마지막에 위치 할것

    function User(name, age, ...skills){
      this.name = name;
      this.age = age;
      this.skills = skills;
    }
    const user1 = new User('song','29','js','react');
    const user2 = new User('kim','29','python')
    ```

  - `Spread syntax`
  ```js

  let arr1 = [1,2,3];
  let arr2 = [4,5,6];

  arr1 = [...arr2, ...arr1]; //456123

  let user = {name:'song'};
  let info = {age:29};
  let front = ['JS','REACT']
  let lang = ['KOR','ENG','JAP']

  user = {
    ...user,
    ...info,
    skills:[...front,...lang]
  };

  console.log(user)

  ```

  - `Lexical Environment`
    - closure : 함수와 lexical environment의 조합, 함수가 생성될 당시의 외부 변수 기억
    - 캡슐화, 은닉화
    - 예시 작성 후 첨부


  - `hoisting` : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것으로 처리

      - let과 const도 ``hoisting``되지만 TDZ(Temporal Dead zone)의 영향을 받음
      - 선언만되고 할당은 hoisting되지않음
      - let과 var는 선언 후 나중에 할당가능, const는 선언+초기화+할당 한번에 (값이 변하지 않기 때문)

  - `var`
    - no var anymore (ES6)
    - var는 `hoisting`됨

  - `scope`
    - let, const는 block-scoped(for, if try catch etc)

  - `생성자 함수`
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
  - `Computed property`
  ```js
  let n = "name";
  const user{
    [n] = "Song"
  }

  ```

  - **`Object`**
    ```JAVASCRIPT
      const user = {
        name : 'Song'
        age : 29
      }
      //이 user에는 값이 아닌 객체 메모리 참조값이 저장됨
      // const copyUser = user -> 메모리 주소가 저장, 복제x
    ```
    - Object.assign() (객체 복제, 병합 등)
    ```js
      Object.assign({gender:'male'},user); // gender만 있는 객체에 user병합

    ```
    - keys() , values() , entries() , fromEntries()

  - `Symbol`
    - symbol은 유일성 보장 (== or === false)
    - 설명을 덧 붙일 수 있음
    ```js
      const id = Symbol('id');
    ```
    - Symbol.for() -> 하나의 심볼 보장 없으면 만들고, 있으면 가져옴
    ```JAVASCRIPT
      const id1 = Symbol.for('id');
      const id2 = Symbol.for('id');
      //id1 === id2 -> true
    ```
    - 활용법 다시 공부하기
    ```JAVASCRIPT
      //기존의 객체에 내 property 추가
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

  - `number, math, method`
    - toString()
    - Math.ceil(), floor(), round(), toFixed(소수점 자리 개수, 넘으면 0으로 채움, **문자열반환**), random()
    - isNaN(), parseInt(str,진수), parseFloat(), max(), min(), abs(), pow(n,m), sqrt()

  - `String`
    - "", '', \`차이점
    - indexOf(), trim(), substring(), substr(n,m)->n부터 m개, repeat()
    - 문자열도 비교가능(아스키)

  - `Array`
    - splice(n,m,x?), slice(n,m), slice()->복사, concat(arr1,arr2), indexof(), lastIndexOf()
    - includes(), find(fn), findIndex(fn), filter(), reverse(), join(), split(), isArray()
    ```js
    //find,findIndex는 첫 true에서 반환, 없으면 undefined
    //finter는 전부 찾아서 배열로 반환

    let arr = [1,2,3,4,5];
    const result = arr.find((item)=>{
      return item%2 === 0;
    })
    console.log(result); //2

    let userList = {
      {name: "song", age:30};
      {name: "park", age:29};
      {name: "kim", age:10};
    }

    userList.findIndex((user)=?{
      if(user.age<19){
        return true;
      }
      return false
    })
    console.log(result)//2
    ```
    - map() - 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
    ```js
    let userList = {
      {name: "song", age:30};
      {name: "park", age:29};
      {name: "kim", age:10};
    }
    let newUserList = userList.map((user,index)=>{
      return Object.assign({},user,{
        isAdult:user.age>19,
      });
    });
    console.log(newUserList);
    ```
    - sort(fn)
    ```js
    //sort는 함수를 인자로 받음
    let arr = [27,8,5,13];
    arr sort((a,b)=>{
      cosole.log(a,b);
      return a-b;
    });
    console.log(arr) // 5,8,13,27
    ```
    - reduce(fn), reduceRigh
    ```js
    let arr = [1,2,3,4,5];
    const result = arr.reduce((prev,cur)=>{
      //prev는 누적값, 0은 초기값 optional
      return prev+cure;
    },0)

    ```

  - `SetInterval, ClearInterval`
  ```js
  let num = 0;
  function showTime(){
    console.log(`Hi,${num++}second after you admitted`)
    if (num>5){
      clearInterval(tId);
    }
  }
  const tId = setInterval(showTime,1000);

  ```
***
#### Memo & Keyword

  - [Lodash](https://lodash.com/)
  - undefined 와 null에 대한 이해
  - const, let ( var )
  - **destructuring assignmnet (array, object)**
  - hoisting
  - value types & reference types
  - "==" , "==="
  - Typeof(null이 object..?) , Instanceof(work array, object but not primitive types)

***

#### Reference

- [노마드코더 유튜브](https://www.youtube.com/watch?v=dIIQmSsg0SI)
- [MDN-JS](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [코딩앙마](https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=4541s)