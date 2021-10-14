# NODEJS
***
![image](https://user-images.githubusercontent.com/15559593/137326795-cec0db5f-73e4-4934-b345-d6e0236194dd.png)

CHROME V8엔진 이용, 서버에서 JS를 동작할수 있게하는 환경 제공

***

#### 특징

* 내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치등의 별도 SW없이 동작 가능
* 이벤트 기반, 논 블로킹 I/O모델 사용하여 가볍고 효율적 ( 서버 부하가 적다, 이전 작업 완료까지 안 기다림)
![image](https://user-images.githubusercontent.com/15559593/137327819-f341733a-4613-4ed7-bfcf-ce861e7d2e8b.png)
* 패키지 생태계로 큰 오픈소스 라이브러리 npm 보유 (모듈 활용 용이)
* 싱글 스레드 ( 빠른 응답시간, but 단일처리 소모시간 고려 요망 )
* [NODEJS-About](https://nodejs.org/ko/about/)
![image](https://user-images.githubusercontent.com/15559593/137328129-211fc7e4-f53e-40bc-aa65-6058dc00c62a.png)

#### 장점


* JS를 활용하여 SERVER 로직 처리 가능
* 활용/개발이 쉬움
* 높은 처리 성능(논블로킹 I/O, 단일 스레드 이벤트 루프)
* 서버 부하 적음(이벤트 기반 비동기방식)
* npm의 라이브러리, 패키지를 활용 가능
* **간단한 로직, 대용량(동시에 여러 request), 빠른 응답요구, 비동기에 어울리는(채팅, 스트리밍 등)서비스에 유리**

#### 단점

* 코드가 순차적이 아닌 비동기방식(응답에 따라)으로 수행됨, 설계 유의
* Callback hell에 유의 
* 단일쓰레드이므로 큰 작업이 있는 서비스에는 맞지 않음
* **단일처리가 오래걸리는 경우, 서버의 로직이 복잡한 경우, 개발 복잡도가 높은경우 불리**

#### 레퍼런스
- [구름에듀](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/21762/node-js-%EB%9E%80)
- [NODE.JS](https://nodejs.org/ko/about/)
- [위키](https://ko.wikipedia.org/wiki/Node.js)
- [Velog/ash3767](https://velog.io/@ash3767/Node-js)
