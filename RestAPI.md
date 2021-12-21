# REST API(Representational State Transfer)

  - 자원(resource)의 표현(representation)에 의한 상태 전달
  - 웹기술/HTTP 프로토콜 활용 -> 웹의 장점 활용하는 아키텍쳐 스타일
  - Client와 Server사이의 통신 방식 중 하나

|![image](https://lh3.googleusercontent.com/A2bb3UwAu4u9UU1q9FdUgZ9MAfnain306RndVW7sRXWumQ0FVVM4XhGDRTtr0YYDSBULrewxtAqKdmZUPFUKXF2g6NY3fCg2vLGyLZxaFIpOJ5Oi8MzLgiNyJIJwsIyq2RRCabkp)|
|:--:|
| *NAMESPACE IT* |

***

## `Concept, Content`

  - 어떤 자원에 대해 CRUD 연산을 수행하기 위해 URI(Resource), method로 요청
  - URI는 정보의 자원을 표현해야한다, 자원에 대한 행위는 HTTP Method로 표현한다.

  - `Goal`
    - 컴포넌트간의 유연한 상호 연동
    - 범용 인터페이스 (URI, HTTP) -> 비지니스 로직 설계에 집중
    - 컴포넌트 단위 독립적인 개발 -> 독립적인 배포
    - 보안, 딜레이, 레거시 시스템 incapsulation

  - `Resource(자원, URI)`
    - 고유한 ID, 자원은 server에 존재
    - /groups/:grouos_id 와 같은 HTTP URI
    - Client는 URI로 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청

  - `Verb(행위, Method)`
    - http 프로토콜 method(get, post, put, patch, delete) 사용

  - `Representation(표현)`
    - Client와 Server가 데이터를 주고받는 형태(JSON, XML, TEXT, RSS 등)
    - JSON, XML이 일반적


## `Feature`

  - `Client & Server 구조`
    - 의존성 낮음
    - Rest server : api 제공하고 비지니스 로직 처리 및 저장
    - Client : 인증, context등 관리하고 사용

  - `Stateless(무상태성)`
    - HTTP가 STATELESS PROTOCOL이다, 즉 context를 server에 저장하지 않아서 구현이 단순해짐
    - 각 요청이 연관되어서는 안됨.
    - server 처리방식의 일관성 부여, 서비스 자유도 확보

  - `Cacheable(캐시처리가능)`
    - http 프로토콜로 웹에서 사용하는 기존인프라 활용가능 (http의 캐싱기능 적용)
    - Last-modified 태그나 E-tag를 이용해서 캐싱 구현 가능
    - 캐싱으로 대량의 요청 효율적 처리 -> Rest server 트랙잭션을 없앰 -> 응답시간, 성능, 자원효율 향상

  - `Self-descriptiveness(자체표현구조)`
    - 메세지 자체가 스스로 설명되어야 한다는 것, 메세지를 보고 뜻을 알 수 있어야한다는 것


  - `Layered System(계층화)`
    - rest server는 다중 계층으로 구성 가능
    - api server는 순수 비지니스 로직 수행, 앞 단에 보안, 로드밸런싱, 암호화, 사용자인층 추가등 구조상 유연성 확보
    - 로드밸런싱, 공유 캐시 등으로 확장성과 보안성 향상 가능
    - proxy, gateway같은 네트워크 기반 중간매체 활용 가능

  - `Uniform(유니폼 인터페이스)`
    - URI로 지정한 자원 조작을 통일하여 한정적인 인터페이스로 수행
    - HTTP프로토콜을 따르는 모든 플랫폼에서 활용 가능
    - 특정 언어나 기능에 종속되지않음

## `Rules`
  - URI는 정보의 자원을 표현해야한다(명사, 소문자/document 단수명사/collection 복수명사/store 복수명사)
  - 자원의 행위는 HTTP Method 표현, URI에 Method가 들어가면 안됨, 경로부분에 가변적인 부분은 유일한값(ex :id)
  - 슬래시(/)는 계층 관계를 사용, 마지막문자로는 쓰지않음
  - 하이픈(-)는 URI가독성용으로 사용, 밑줄(_)는 사용하지않음
  - 파일확장자를 포함하지 않음


## `Advantage, Disadvantage`
  - `Advantage`
    - 쉽다, rest api 메세지를 읽고 의도하는 바를 파악하기 쉽다
    - client와 server의 역할 분리, 플랫폼 독립성 확장(http 프로토콜 충족시)
    - 별도의 인프라 구축할 필요 없음(http)
  - `Disadvantage`
    - 서버와 클라이언트 상호작용에는 맞지 않음(point to point model)
    - 보안과 통신규약 정책을 다루지 않기때문에 개발자가 신경써야함
    - HTTP 의존적
    - CRUD로 처리하기 애매한 상황들
## `MEMO`
  - URL - Uniform Resource Locator(인터넷 상 자원의 위치)
  - cf) URI - Uniform Resource Identifier(인터넷 상의 자원을 식별하기 위한 문자열의 구성) uri가 url을 포함함

## `Reference`
- [namespaceit](https://namespaceit.com/blog/what-is-a-restful-api-rest-api-and-how-does-it-work)
- [슬기로운 개발생활](https://dev-coco.tistory.com/97)