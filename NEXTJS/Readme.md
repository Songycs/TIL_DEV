# NEXTJS

***

- REACT 프레임워크 ( SSR, SEO )
- 초기화면은 SSR, 이후 라우팅은 CSR
- [Project Animate](https://github.com/Songycs/Animate)

***

#### CONCEPT

* `SSR ( Server side Rendering )`

  - [SSR && CSR](https://github.com/Songycs/TIL_DEV/blob/master/SSR%20%26%26%20CSR.md)
  ![image](https://miro.medium.com/max/1050/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)
  - **getServerSideProps**
    - called at request time
    - pre-render 필요없으면 CSR -> `SWR` -> React hook, CSR에 활용
* `getInitialProps()`
    - use getStaticProps, getServerSideProps after Next.js 9.3 or newer

* `Automatic Routing`

* `Code Splitting`

* `Static Generation`
  - **서버측**에서 실행됨, 브라우저용 js 번들에도 포함되지않아, 브라우저로 보내지않고 쿼리 등 작성가능
  - External data가 없으면 자동, 있으면 `getStaticProps` 활용 (->데이터 유무 상관없음)
  - 빌드시에 자동으로 정적으로 생성됨
  - [데이터 함수처리](https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops)
  - `getStaticPaths`로 경로 페이지 미리 생성( data에 종속 시 )
  - `development` vs `production` (별도 파일에서 자세히)
  - 페이지에서만 가능하다, react가 페이지 렌더링전에 필요 데이터를 다 갖고있어야하니까
* `Prefetching`

* `Dynamic Routes`
  - pages/posts/[id].js


***

#### LIFECYCLE

  - Next 서버가 get 요청을 받음
  - 요청에 알맞은 pages/Component를 찾음
  - `_app.tsx`의 getInitialProps 실행(있다면)
  - route에 맞는 페이지의 getInitialProps 실행, pageProps를 받아옴
  - `_documents.tsx`의 getInitialProps 실행, pageProps 받아옴
  - 모든 props 구성 후 `_app.tsx` -> page compoennt 순으로 렌더링
  - 모든 컨텐츠 구성 , `_documents.tsx` 실행하여 html출력

***

#### CONSTRUCTURE & DIRECTORY

  - `_app.tsx`
    - 최초 실행 여기서 렌더링 시 전체에 반영
    - 내부에 component가 있다면 전부 실행, html의 body구성
    - Component, pageProps를 받음
    - GET요청시 Component에 /pages/index.js가 props로 내려옴
    - pageProps는 getInitialProps로 받은 props를 의미
    - 이후 `_document.tsx` 실행
    - 로그를 찍으면 server에도 찍힘

  - `_document.tsx`
    - meta태그 정의 , 전체 페이지 관리 컴포넌트
    - 로그를 찍으면 서버에만 보임
    - static한 것만 !
    - 페이지 구성요소만 반영되고 , js는 반영되지 않음

***

#### Related

  - Hot Module Replacement
  - polyfill
***

#### REFERENCE

- [NEXTJS DOCS](https://nextjs.org/)
- [기억보다 기록을, nextjs](https://kyounghwan01.github.io/blog/React/next/basic/#getinitialprops-%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A6-%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5-%E1%84%87%E1%85%A9%E1%84%82%E1%85%A2%E1%84%80%E1%85%B5)