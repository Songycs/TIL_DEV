----------------------------
 **Logical OR assignment (||=)**
 
 - [출처링크,MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)


 ```Javascript
 
 //변수가 참이 아니면 업데이트 됨
  let a = false;
  a ||= true;
  
 //기존 방식
  let a = false;
  if(!a){
    a = true;
  }
 ```
 
 - 주의 : 익스플로러 미지원
