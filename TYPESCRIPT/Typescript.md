# Typescript
***

21.10 웹 기초 재정립 Typescript , 공부할 때마다 채워넣기  
  
몰랐거나 중요한 개념 기록, 기타 내용 정리

***

#### Concept

  - ``static, compile``
  	- compile나 Babel로 js로 변환됨
  	- 코드 작성단계에서 오류확인, 미리 타입을 결정해 속도 향상

  - ``TS vs JS``
  	- TS는 JS기반 (JS superset)
  	- JS는 Client script언어 TS는 OOP Compile언어
  	- 데이터 추상화 중심(object, class)
  	- oop.. -> 상속, 캡슐화, 생성자 활용 (include ES6)

  - ``WHY``
  	- 버그 사전제거, 작업과 동시에 디버깅
  	- JS호환(동일 용도로 활용가능)
***
   
#### Contents

  - ``Types``

	```ts
		let age:number = 30;
		let isAdult:boolean = true;
		let a:number[] = [1,2,3];
		let a2:Array<number> = [1,2,3]
				
		let week1:string[] = ['mon','tue','wed']
		let week2:Array<string> = ['mon','tue','wed']

		//tuple, index별로 다른 type가능
		let b:[string,number];
		// b[0].toLowerCase() -> o, b[1] -> x 

		// void, never
		function sayHello():void{
			console.log("gg")
		}
		function showError():never{
			throw new Error();
		}
		function infLoop():never{
			while(true){
				//do..
			}
		}

		//enum , js에 없음, 유사타입 묶음, 공통점이 있을때 활용
		enum Os{
			Window,
			Ios,
			Android
			// 자동으로 0 부터 ++ 할당, 이전 변수값++로 할당
			// ex) Ios=10 -> Android = 11 
		}

		let myOs:Os;
		myOs = Os.Window

		// null, undefined
		let c:null = null;
		let d:undefined = undefined
	```

  - ``Literal Types``
	  ```ts
	  	const userName1 = "Song"; // string literal
	  	let userName2: string | number = "Tom";
	  	//userName = 3 -> ok!
	  	type Job = "police" | "developer" | "teacher";

	  	interface User{
	  		name : string;
	  		job : Job;
	  	}

	  	const user: User = {
	  		name: "Song";
	  		//job: "student" -> error!!
	  		job: "developer";
	  	}
	  ```

  - ``Union Types(유니온)``
	  ```ts
	  	interface Car{
	  		name: "car";
	  		color: string;
	  		start(): void;
	  	}
	  	interface Mobile{
	  		name: "mobile";
	  		color: string;
	  		call(): void;
	  	}
	  	//식별 가능한 유니온 타입, 동일 속성을 다르게해서 구분 가능한 유니온타입
	  	function getGift(gift: Car | Mobile){
	  		console.log(gift.color); // ok, both interface has color
	  		gift.start() // error, only car has start()
	  		
	  		//조건이 많으면 switch가 나음
	  		if(gift.name === " car"){
	  			gift.start()
	  		} else{
	  			gift.call();
	  		}
	  	}
	  ```
  - ``Intersection Types(교차)``
	  ```ts
	  	interface Car{
	  		nmae: string;
	  		start():void;
	  	}
	  	interface Toy{
	  		name:string;
	  		color:string;
	  		price: number;
	  	}
	  	//모든속성 확인 필요
	  	const toyCar: Toy & Car = {
	  		name: "타요",
	  		start() {},
	  		color: "blue",
	  		price:1000
	  	}
	  
	  ```
  
  - ``Utility Types``
  ```ts
  //1. keyof -> interface의 키값들을 union 형태로 받을 수 있음
  interface User{
  	id: number;
  	name: string;
  	age: number;
  	gender: "m" | "f";
  }

  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
  
  // 2. Partial<T> -> property를 모두 option으로 만들어줌

  interface User{
  	id: number;
  	name: string;
  	age: number;
  	gender: "m" | "f";
  }
  let admin: Partial<User> = {
  	id:1,
  	name: "Song",
  	job: "dd" // error! 없는거임 	
  }

  // 3. Required<T> -> 모든 property를 필수로 
  interface User{
  	id: number;
  	name: string;
  	age?: number;
  }

  //error! age가 없음
  let admin: Required<User> = {
  	id: 1,
  	name: "Song"
  }

  // 4. readonly -> 읽기전용으로 바꿈
    interface User{
  	id: number;
  	name: string;
  	age?: number;
  } 
  let admin: Readonly<User> ={
  	id:1,
  	name:"song"
  }
  admin.id = 4; //error, readonly

  // 5. Record<K,T> KEY, TYPE
  type Grade = "1" | "2" | "3" | "4";
  type Score = "A" | "B" | "C" | "D" | "F";
  //Score가 type
  const score: Record<Grade, Score> ={
  	1:"A",
  	2:"B",
  	3:"C",
  	4:"D"
  };
  // Record 활용 예시
  interface User{
  	id: number;
  	name: string;
  	age: number;
  }

  function isValid(user:User){
  	const result: Record<keyof User, boolean> = {
  		id : user.id > 0,
  		name : user.name !=="",
  		age: user.age > 0,
  	};
  	return result;
  }

  // 6. Pick<T,k> -> 일부만 가져와서 활용

  interface User{
  	id: number;
  	name: string;
  	age: number;
  	gender: "M" | "W";
  }
  const admin: Pick<User, "id" | "name"> = {
  	id: 0,
  	name: "Song"
  };

  // 7. Omit<T,K> -> 특정 PROPERTY 생략하고 활용가능
  interface User{
  	id: number;
  	name: string;
  	age: number;
  	gender: "M" | "W";
  }
  //위의 pick과 같은 기능
  const admin: Omit<User, "age" | "gender"> = {
  	id: 0,
  	name: "Song"
  };

  // 8. Exclude<T1,T2> -> T1에서 T2타입을 제거함, cf)omit은 property
  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | string>; //boolean만 남음
  
  // 9. NonNullable<Type> // null과 undefined를 제거함
  type T1 = string | null | undefined | void;
  type T2 = NonNullable<T1>; //string과 void만 남음
  ```

---------------------------------------------------	

  - ``Interface``
  	- property를 정의해서 객체로 표현하고자할때 활용

	  ```ts
			type Score = 'A' | 'B' | 'C' | 'F'
			interface User{
				name : string;
				age : number;

				// '?' -> 선택적으로 활용(optional)
				gender? : string;

				// readonly, 생성할때만 할당가능, 이후 수정 불가
				readonly birthYear : number;

				// 여러 property를 받을 수 있음
				//[grade:number] : string;
				//위의 Score 타입에 해당해야함
				[grade:number] : Score;

			}
			let user : User = {
				name : 'song',
				age : 29

				//[grade:number]
				1 : 'A',
				2 : 'B'
			}
			user.age = 10;
	  ```

  	- ``inferface function``

	  ```ts
			interface Add{
				(num1:number, num2:number): number;
			}

			const add : Add = function(x,y){
				return x+y;
			}

			interface IsAdult {
				(age:number):boolean;
			}

			const a:IsAdult = (age) =>{
				return age > 19;
			}
	  ```

  	- ***``interface class``***

    ```ts
			interface Car{
				color: string;
				wheels: number;
				start(): void;
			}
			interface Benz extends Car{
				door: number;
				stop(): void;
			}

			// Car에 있는 것들을 포함해야함
			const benz : Benz = {
				door : 5,
				stop(){
					console.log("stop");
				}
				color : 'black',
				wheel : 5;
				start(){}
			}
			class Bmw implements Car{
				color;
				wheels = 4;
				constructor(c:string){
					this.color = c
				}
				start(){
					console.log("gogo");

				}
			}

			//확장은 여러개로 가능하다
			interface Car{
				color: string;
				wheels: number;
				start(): void;
			}
			interface Toy{
				name: string;
			}

			interface ToyCar extends Car, Toy{
				price: number;
			}

    ```
---------------------------------------------------

  - ``Functions``

	```ts
			function add(num1: number, num2: number): void{
				console.log(num1+num2);
			}

			function isAdult(age:number): boolean{
				return age>19;
			}

			//name이 없을때를 대비한 코드  '?' 사용에 유의
			function hello(name?:string){
				return `Hello, ${name||"world"}`;
			}
			const result = hello();
			const result2 = hello("song");

			//cf) default name function(js syntax)
			function hello2(name = "song"){
				return `Hello, ${name}`;
			}

			// 선택적 매개변수는 필수 매개변수 앞에 있어야함, ?가 먼저오면 에러
			function hello3(name:string, age?:number):string{
				if(age!==undefined){
					return `Hello, ${name}. You are ${age}.`;
				}else{
					return `Hello, ${name}`;
				}
			}
			//cf) 선택을 앞에 두는 경우, 단 부를떄 undefined로 불러야함
			function hello4(age: number | undefined, name:string): string {}
			const hello4Result = hello4(undefined, "song")

			// "..."를 활용하여 나머지 매개변수를 배열로 나타낼수있게함
			function add(...nums:number[]){
				return nums.reduc((result,num)=>result+num,0)
			}
			add(1,2,3,4,5,6,7,8,9,10); //55

	```
  - ``This``
  	- bind 개념 
		```ts

					interface User{
						name: string;
					}
					
					const Song: User = {name:'Song'}

					function showName(this:User, age:number, gender:'male'|'female'){
						console.log(this.name,age,gender)
					}
					const a = showName.bind(Song)
					a(29,'male')
					
		```
  - ``Overload``
  	- 동일한 함수지만 매개변수의 타입에 따라 다르게 동작해야할때 활용
		```ts
						interface User{
							name: string;
							age: nmber;
						}

						function join(name:string, age:string): string;
						function join(name:string, age:number): User;
						function join(name:string, age:number|string): User | String{
							if (typeof age === "number"){
								return {
									name,
									age,
								};
							} else{
								return "write age in number";
							}
						}

						const song: User = join("Song",29);
						const ssong: string = join("Ssong","29");
		```

---------------------------------------------------
  - ``Generic``
  ```ts
  //<T>를 type parameter라 함
  function getSize<T>(arr:T[]): number{
  	return arr.length;
  }
  const arr1 = [1,2,3];
  getSize<number>(arr1);

  const arr2 = ["a","b","c"]
  getSize<string>(arr2);
  
  // interface에서 활용
  interface Mobile<T>{
  	name: string;
  	price: number;
  	option: T;
  }
  //const m1: Mobile<{color:string, coupon boolean}> <- 이처럼 활용 가능
  const m1: Mobile<object>={
  	name : "s21",
  	price:1000,
  	option:{
  		color: "red";
  		coupon: false;
  	}
  }
  const m2: Mobile<string> ={
  	name : "s21",
  	price: 1000,
  	option:"good"
  }


  interface User{
  	name:string;
  	age:number;
  }
  interface Car{
  	name:boolean;
  	color:string;
  }
  interface Book{
  	price:number;
  }

  const user: User = { name:"Song", age:29};
  const car: Car = { name:"bmw",color:"red"}
  const book: Book = {price:3000};

  //T타입을 받는데, name이 string인 객체를 확장한 형태일 것이다.
  function showName<T extends {name:string}>(data:T):string{
  	return data.name;
  }
  showName(user); //ok
  showName(car); //error, no string 
  showName(book); //error, no name

  ```
---------------------------------------------------
  - ``Class(ES6)``
	```ts
		class Car{
		//멤버 변수는 미리 선언해줄 것 -> 접근자, readonly활용시 미리 선언 없이 가능
			color:string;
			constructor(color: string){
				this.color = color
			}
		}
	```
  	-	``Access modifier (접근 제한자)`` : public, private, protected
  	```ts
  	class Car{
  		/*
			public : 자식 클래스, 클래스 인스턴스 모두 접근 가능
			protected : 자식 클래스에서(만) 접근 가능
			private : 해당 클래스 내부에서 접근 가능
  		*/
  		//private 명시 혹은 #name
  		private name: string ="car";
  		color: string;
  		constructor(color: string){
  			this.color = color;
  		}
  		start(){
  			console.log("start");
  			console.log(#name);
  		}
  	}  

  	```
  	- ``readonly``
  	```ts
  	//readonly : 읽기전용, 수정 불가, constructor에 지정해주어야 new로 값 넣을 수 있음
  	class Car{
  		readonly name: string = "car";
  		color : string;
  		constructor(color: string, name){
  			this.color = color;
  			this.name = name;
  		}
  	}
  	
  	class Bmw extends Car{
  		constructor(color: string, name){
  			super(color,name)''
  		}
  	}

  	const tmp = new Bmw("black","zzz")
  	```
  	- ``static``
  		- this말고 클래스명에 .으로 접근

  	- ``추상 class``
  	```ts
  	// 같은 추상 class로 만들어진 많은 클래스들이 같은 이름의 메소드를 가질 순 있지만 다른 기능을 할 것
  	abstract class Car{
  		color: string;
  		constructor(color:string){
  			this.color = color;
  		}
  		start(){
  			console.log("start");
  		}
  		abstract doSomething(): void;
  	}
  	
  	class Bmw extends Car{
  		constructor(color: string){
  			super(color)
  		}
  		doSomething(){
  			alert("ok");
  		}
  	}
  	```
***

#### Memo & Keyword
	
	- https://www.typescriptlang.org/play/

***

#### Reference
 - [Typescript-Docs](https://www.typescriptlang.org/docs/)
 - [코딩앙마 유튜브](https://www.youtube.com/watch?v=5oGAkQsGWkc&t=9s)
 - [S-SCORE](https://www.s-core.co.kr/insight/view/%ED%99%9C%EC%9A%A9%EB%8F%84%EA%B0%80-%EB%86%92%EC%95%84%EC%A7%80%EB%8A%94-%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%96%B8%EC%96%B4-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD/)