# SSR && CSR 
***
![image](https://user-images.githubusercontent.com/15559593/137744097-0d1c6b11-d5f1-4618-83ef-11ce93473135.png)

***

About Server Side Rendering , Client Side Rendering
HTML과 다운받은 JS파일의 로직을 통해 동적으로 DOM을 그리는 과정에 대해 
 
***

#### CONCEPT

* `SSR ( Server side Rendering )`

    - 서버에서 렌더링 후, 데이터 결합된 HTML을 전달 ( 이 과정 중 화면 깜빡 등 )
    - 초기 빠른 응답, SEO ( Search Engine Optimization ) 용이
    - 페이지 구성 속도는 늦어지지만, 사용자에게 보여주는 컨텐츠 구성 완료가 빨라진 다는 것
    - VIEW 변경에 서버에 요청이 필요해 부하가  
    - ![image](https://miro.medium.com/max/1050/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)
    - ![image](https://media.vlpt.us/images/vagabondms/post/8c4c7988-c35d-4722-8e78-4c4f4bbb54a5/image.png)


* `CSR ( Client side Rendering )`

    - 필요한 데이터를 주고 받아 클라이언트 단에서 렌더링 
    - script 링크가 걸린 HTML을 받아, JS를 다운받고 화면에 DOM을 그림
    - SSR에 비해 빠른 상호작용, 자연스러움, 서버 부하가 낮음, Component 개발
    - 번들링 된 JS파일을 받아서 렌더링하는 과정이 길어지면(APP이 크면), 초기로딩이 느림
    - 사용자와의 상호작용이 많을 때, 데이터양이 많을 때 
    - SEO에 추가 작업 필요
    - ![image](https://miro.medium.com/max/1050/1*CRiH0hUGoS3aoZaIY4H2yg.png)
    - ![image](https://media.vlpt.us/images/vagabondms/post/0289f96e-c34d-48a9-b942-eb9376ab43af/image.png)
  
#### Consideration

  - 비용 ( SSR, 서버에서 매번 로직을 실행하는 경우 비용발생, CSR은 트래픽비용 )
  - Caching ( SSR, 주로 정적에 유효함)
  - 데이터 보안 등 ( CSR, SSR이 유리한 점이 다름 )
  - 서버의 성능 ( 좋지 않다면 CSR이 유리할 것 )

#### Related

  - `SPA`: Single Page Application
  - `Next.js`: React Framework for SSR ETC
  - `PWA`: Progrssive Web App
  -



#### REFERENCE

- [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)
- [어서 와, SSR은 처음이지? - 도입 편](https://d2.naver.com/helloworld/7804182)
- [위펄슨 기술 블로그](https://tech.weperson.com/wedev/frontend/csr-ssr-spa-mpa-pwa/#csr-client-side-rendering-vs-ssr-server-side-rendering)