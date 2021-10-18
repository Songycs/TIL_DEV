# WEBPACK
***
![image](https://user-images.githubusercontent.com/15559593/137744097-0d1c6b11-d5f1-4618-83ef-11ce93473135.png)

***
webpack은 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러 
webpack이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 디펜던시 그래프를 만듬
 
***

#### 핵심개념

* `Entry(엔트리)`

    - webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈
    - webpack은 엔트리포인트가 의존하는 다른 모듈 및 라이브러리를 찾아낸다 
    - .src/index.js 외에 다음과 같이 여러 엔트리 추가 가능
    - ![image](https://user-images.githubusercontent.com/15559593/137744841-c4ce5c9c-17c2-4f44-801f-3c7688633687.png)

* `Output(출력)`

    - 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할
    - 기본 출력 파일의 경우에는 ./dist/main.js로 , 생성된 기타 파일의 경우에는 ./dist 폴더로 설정
    - 다음과 같이 output 필드 지정가능
    - ![image](https://user-images.githubusercontent.com/15559593/137744998-cf72e19d-35fb-480a-ad64-f5bee2162d30.png)
    - [output속성 상세](https://webpack.kr/configuration/output/)

    
* `Loaders(로더)`
* `Plugins(플러그인)`
* `Mode(모드)`
* `Browser Compatibility(브라우저 호환성)`


#### 레퍼런스

- [WEBPACK](https://webpack.kr/concepts/)
