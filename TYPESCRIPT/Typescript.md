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
---------------------------------------------------
  - ``Class``

***

#### Memo & Keyword
	
	- https://www.typescriptlang.org/play/

***

#### Reference
 - [Typescript-Docs](https://www.typescriptlang.org/docs/)
 - [코딩앙마 유튜브](https://www.youtube.com/watch?v=5oGAkQsGWkc&t=9s)
 - [S-SCORE](https://www.s-core.co.kr/insight/view/%ED%99%9C%EC%9A%A9%EB%8F%84%EA%B0%80-%EB%86%92%EC%95%84%EC%A7%80%EB%8A%94-%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%96%B8%EC%96%B4-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD/)