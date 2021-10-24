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
		funtion sayHello():void{
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
	
***

#### Memo & Keyword
	
	- https://www.typescriptlang.org/play/

***

#### Reference
 - [코딩앙마 유튜브](https://www.youtube.com/watch?v=5oGAkQsGWkc&t=9s)