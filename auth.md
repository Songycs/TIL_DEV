# Authentication ( 인증 ) / Authorization ( 인가 )

***
  - ``Authentication`` : 로그인, 특정 서비스에 일정 권한이 주어진 사용자임을 id/ps 등으로 인증
  - ``Authorization`` : 인증 받은 사용자가 서비스의 기능들을 사용하려할때 인증상태를 체크하고 허용하는 것
***

#### Session ( 서버 기반 인증 시스템 )

***
  - ``Session`` : 서버 측에 사용자 정보 저장 ( memory,disk,DB etc -> 세션 유지)
  - ``Stateful`` : 클라이언트 상태를 유지하고 서비스에 이용
  - 서버 Ram, DB에 부하가 일어날 수 있음
  - 트래픽 증가 등으로 확장 필요할수 있음, 세션 분산 시스템 설계가 복잡
  - ``CORS`` : 웹APP에서 세션 관리시 쿠키를 여러 도메인에서 활용하는데 번거로울 수 있음 
***

####  JWT (Json Web Token)

***

  - ``Token``
    - 인증받은 사용자들에게 토큰 발급, 서버에 요청시 헤더에 토큰을 보내 유효성 검사
    - 세션유지하지않고 클라이언트의 요청만 작업처리 -> 상태 미유지, stateless
    - 로그인 되어있는지 여부를 체크하지 않고 시스템 확장 가능
    - 로그인 -> 서버의 정보 검증 -> 서버의 Signed 토큰 발급 -> 클라이언트에 저장, 서버 요청시 첨부(http 요청 header에) -> 서버 토큰 검증
    - ``장점``
      - stateless, scalability (토큰 사용시, 어떤 서버로 요청이 와도 ok)
      - security (쿠키 사용의 취약점 해소 but 토큰 사용의 취약점 존재 )
      - extensibility (로그인 정보가 활용되는 분야의 확장, oauth etc)  
      - CORS 해결(호환성 향상), ASSETS파일은 모두 CDN제공하고 서버는 API만 다루도록 설계 가능

  - Json 포맷을 이용하여 사용자에 대한 속성을 저장하는 Claim 기반의 Web Token
  - 토큰 자체를 정보로 사용하는 Self-Contained( 자가수용 ) 방식으로 정보를 가볍고 안전하게 전달함

  - ``claim``: 사용자 정보, 데이터 속성 등, 클레임 토큰의 토큰안에 정보를 담을 수 있음(cf) string기반 토큰)
  	- 이를 통해 발급한 토큰을 만료, DB접근없이 검사 & 처리, 로그아웃 등의 토큰관리 수행

  - ``구조`` : Header.Payload.Signature
    - Header : typ(토큰 타입 지정), alg(해싱 알고리즘 - 주로 SHA256 or RSA)
    ```JAVASCRIPT
    {
      "typ":JWT, //토큰 타입
      "alg": "HS256" // 해싱 알고리즘
    }
    ```
    - Payload : 토큰에 담을 정보, (name,value) 한쌍이 클레임, 여러 클레임을 담음
    ```JS
    {
      "iss" : "yeonghun.com", //발급자
      "exp" : "211029000000", //만료시간
      "https://yeonghun.com/example?type=post&~~~~~~~" : true, // public claim
      "userId" : "yeonghun@google.com",
      "username" : "song"
    }
    
    ```
      - Registerd Claim ( iss-발급자, sub-제목, aud-대상자, exp-만료시간, nbf-활성날짜, iat-발급시간, jti-고유 식별자 )
      - Public Claim (충돌이 방지된 이름 요구, URI형식 작성)
      ```JS
      { 
        "https://www.google.com": true 
      }      
      ```
      - Private Claim ( 사용자 정의, 서버와 클라이언트 사이의 임의 지정정보 저장)
      ```JS
      { 
        "token_type": access 
      }      
      ```
  - ``Signature`` : 토큰 인코딩, 유효성 검증에 사용하는 고유 암호화 코드
    - header, payload값을 BASE64로 인코딩하고, 이를 비밀키로 해싱을 수행 그 후 BASE64로  인코딩하여 생성

  - ``JWT 토큰 예시``
  ```JS
  {
    "Authorization":"Bearer{생성된토큰}",
  }
  
  ```
  - ``주의사항``
    - self-contained, 장점이자 단점
    - 토큰길이 : 정보가 많아질수록 토큰의 길이가 길어짐
    - payload 인코딩 : payload는 BASE로 인코딩된 것, 디코딩으로 정보탈취 가능하므로 중요정보 지양하고, 필요시 jwe암호화
    - stateless : JWT는 stateless하여 생성 후 제어 불가, 임의삭제 안되므로 만료시간 필수
    - 토큰을 클라이언트에서 관리하므로 저장 & 관리 주의 

***

#### ex2

***

#### 레퍼런스
- [망나니개발자](https://mangkyu.tistory.com/55)
- [ivory's DevLog](https://ivorycode.tistory.com/entry/JWTJson-Web-Token)
- [인증-위키백과](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%A6%9D)
- [얄팍한코딩사전](https://www.youtube.com/watch?v=1QiOXWEbqYQ)

