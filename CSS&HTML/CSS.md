# CSS
***

21.10 웹 기초 다지기 CSS , 공부할 때마다 채워넣기

***

#### 방법론

  - BEM ( Block, Element, Modifier ) 
    ```Css
      .block { ... }
      .block__element { ... }
      .block--modifier { ... }
    ```
    -``.blobk``: block은 컴포넌트 의미 ( 독립적 의미 가짐 )
    -``.block_element``: block의 일부, 독립의미 x, block과 함께 사용
    -``.block-modifier``: block과 element의 속성, element 모양 동작 상태 변경 가능
    
  - ITCSS( Inverted Triangle Css )
  ![image](https://user-images.githubusercontent.com/15559593/138219295-e925a3bc-b676-4f83-94f0-233dae0aabf6.png)


  - OOCSS ( Object Oriented CSS )
    - 구조와 모양 분리
    ```Css
      /* Instead of  */
      .box {
          width: 250px;
          height: 250px;
          padding: 10px;
          border: 1px solid #CCC;
          box-shadow: 1px 2px 5px #CCC;
          border-radius: 5px;
      }

      /* Do */
      .box {
          width: 250px;
          height: 250px;
          padding: 10px;
      }

      .elevated {
          border: 1px solid #CCC;
          box-shadow: 1px 2px 5px #CCC;
          border-radius: 5px;
      }
    ```
    
#### 타입

  - Inline
  - Embedded
  - External

#### 전처리기 
  - 종류:
    -  Sass
    -  Less
    -  Stylus
  - 스타일 구성에 재사용성 ++, 
  - selectors 중첩
  - 규칙따라 자동으로 vendor별 prefix추가
    - ``-webkit``: 크롬, 사파리, 오페라
    - ``-moz-``: 파이어폭스
    - ``-o-``: 오페라(구)
    - ``-ms``: IE, Edge

#### 


#### Better when

 - Inline 지양 ( 유지보수에 불리 ) 
 - 내용과 디자인 분리
 - 중복 지양
 - naming 통일 요망
 - 항상 불필요한 코드/스타일시트 최적화 
 - framework 사용시 사용하지않는 selector 제거


#### Reference
 -[Erwinousy blog](https://erwinousy.medium.com/css-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%9C-10%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-9923b106661c)
