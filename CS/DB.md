# Database
***

여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합
작성된 목록으로써 여러 응용 시스템들의 통합된 정보들을 저장하여 운영할 수 있는 공용 데이터들의 묶음

***

#### 구조

  - External Schema
  - Conceptual Schema
  - Internal Schema

***

#### Data model

  - Hierarchical data model ( 계층 데이터 모델 )
  - Network data model ( 네트워크 데이터 모델 )
  - **Relation data model ( 관계 데이터 모델 )**
    - ORM ( Object Relational Mapping )
  - Object data model ( 객체 데이터 모델 )
  - Object-relational data model ( 객체 - 관계 데이터 모델 )

  - 개념
    - Conceptual Modeling
    - 논리적 모델링
    - 물리적 모델링
    -
  - ER모델
    - Entity(개체)
    - Attribute(속성)
  - PK(Primary key), FK(Foreign key)

#### Database System

  - DBMS (
    - Web
    - Distributed
  - RDBMS ( for relational DB )
    - oracle DBMS, MySQL, MS Access
  - NOSQL ( Not only SQL )

  - ``RDBMS vs NoSQL``
    - No schema ( table-column 정의 x )
    - 관계 정의가 없으니 JOIN 불가 ( reference 같은 기능으로 유사구현 )
    - No transaction
    - 분산처리 기능 제공 ( 자체 프레임워크에 포함하고있는 경우가 대부분 )
***
#### SQL ( Structured Query Language )
  -
***
#### Index
  - 데이터를 논리적으로 정렬하여 검색과 정렬의 속도를 높임
  - 삽입, 변경 등에 인덱싱으로 인한 속도 저하
***
#### Integrity ( 무결성 )
  - 데이터의 정확성, 일관성, 유효성 유지 -> DB에 저장된 값에 대한 신뢰 보장
  - 개체, 참조, 도메인, 고유, NULL, KEY
***
#### Transaction
  - ``ACID`` ( Atomicity, Consistency, Isolation, Durability )
    - Atomicity
    - Consistency
    - Isolation
    - Durability
  - 병
***
#### Normalization ( 정규화 )
  - ``목적``
    -  저장 공간 최소화, 데이터 무결성 유지, 자료구조 안정성 최대화
  -  제 1 정규화
  -  제 2 정규화
  -  제 3 정규화
  -  BCNF
***
#### Better when
  -
***
#### Memo
  - Deadlock
  - ``commit``
    - Update, Delete, Insert 후 쿼리문 수행결과에 대해 확정 짓는 것
  - ``rollback``
    -  쿼리 수행결과에 번복, 원상복구 ( Commit 전 활용 )
  - anomaly ( Modification, Insertion, Deletion )
***

#### Reference
 - [위키백과](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4)
 - [망나니개발자 블로그](https://mangkyu.tistory.com/19)
 - [네이버 지식백과 - Integrity](https://terms.naver.com/entry.naver?docId=3478118&cid=58439&categoryId=58439)
 - [DBMS는 어떻게 트랜잭션을 관리할까?](https://d2.naver.com/helloworld/407507)
