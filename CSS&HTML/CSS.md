# CSS
***

21.10 웹 기초 재정립 CSS , 공부할 때마다 채워넣기  
  
몰랐거나 중요한 개념 기록, 기타 내용 정리

***

#### 방법론

  - BEM ( Block, Element, Modifier ) 
    ```Css
      .block { ... }
      .block__element { ... }
      .block--modifier { ... }
    ```
    - ``.blobk``: block은 컴포넌트 의미 ( 독립적 의미 가짐 )
    - ``.block_element``: block의 일부, 독립의미 x, block과 함께 사용, 특정 기능 수행
    - ``.block-modifier``: block과 element의 속성, element 모양 동작 상태 변경 가능, "-"로 표현
    - ``키워드``: 
        - oop 유사, no id but className
        - 형태가 아닌(red, big etc) 목적(block : menu, button, etc element : item, text, title etc)에 맞게 
        - tag, id selector x
        - block은 중첩가능, block은 환경에 영향을 받지 않는다(여백, 위치 등) 
        - modifier는 boolean과 key-value 타입이 있다
        - class명은 구체적이고 명료해야하며, html에서도 읽기 쉬워야한다

  - ITCSS( Inverted Triangle Css )
  ![image](https://user-images.githubusercontent.com/15559593/138219295-e925a3bc-b676-4f83-94f0-233dae0aabf6.png)


  - OOCSS ( Object Oriented CSS )
    - 구조와 모양 분리
    - CSS를 모듈방식으로 개발하여 중복을 최소화
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
    - ``장점``: 재사용성, 스타일시트 용량 축소 ( 속도 향상 )
    - ``단점``: 다중 클래스 사용(HTML 복잡) NON-SEMANTIC한 클래스, Sass와 함께 사용하여 단점 보완(mixin, extend)
    
  - SMACSS ( Scalable and Modular Architecture for CSS )
***

#### 타입

  - Inline
  - Embedded
  - External

***

#### 전후처리기
  - ``Pre-processors``:
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
   - ``Post-processors``:
    - PostCSS
    - Autoprefixer
   
#### Shorthand Properties

  - padding, border, background etc

***

#### Better when 

 - Inline 지양 ( 유지보수에 불리 ) 
 - 내용과 디자인 분리
 - 중복 지양
 - naming 통일 요망
 - 항상 불필요한 코드/스타일시트 최적화 
 - framework 사용시 사용하지않는 selector 제거
 - CSS 대신 Markup 사용하는 법 배우기
 - media 쿼리 사용시 모바일부터( 작은화면 -> 큰화면이 유리 ) 
 - 번들크기 줄이기( ex) webpack의 css-loader 모듈 )\
 - 유연하게 작성하기(ex)  width는 container에서, height는 contents에서 )

***

#### Reference
 -[Erwinousy blog](https://erwinousy.medium.com/css-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%9C-10%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-9923b106661c)
 -[https://chlolisher.tistory.com/11](https://chlolisher.tistory.com/11)
