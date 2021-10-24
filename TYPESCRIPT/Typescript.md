# Typescript
***

21.10 웹 기초 재정립 Typescript , 공부할 때마다 채워넣기  
  
몰랐거나 중요한 개념 기록, 기타 내용 정리

***

#### Concept

	- static

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

	- ``interface class``
	```ts
		//interface class
	```
***

#### Memo & Keyword
	
	- https://www.typescriptlang.org/play/

***

#### Reference
 - [코딩앙마 유튜브](https://www.youtube.com/watch?v=5oGAkQsGWkc&t=9s)
