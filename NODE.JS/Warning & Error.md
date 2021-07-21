
아무 생각없이, node 버전을 업데이트하고, module폴더& package-lock.json을 삭제 후 npm install 등으로 모듈을 설치했다. 
버전이 변경됨에 따라 호환되지않는 모듈도 있었고, 그에따라 연쇄적으로 작동하지 않는 모듈들이 생겼다.
firebase database의 한 collection의 snapshot에서 , documents를 읽는 과정에서 ```doc._key.path```를 읽지 못하는 문제가 생김에 따라
당연히 아무런 데이터를 읽을 수 없었다. 
결국은 firebase 버전과 node 버전을 함부로 업데이트 한 것이 문제였는데(grpc, core-js의 호환 등) 일부는 다시 downgrade 하는등, 
이외에도 여러 모듈들의 버전을 정리한 기회였다
총 4시간에 걸쳐서 많은 warning들을 정리했고 node, react처럼 중심들의 버전은 더 깊이 이해하면서 개발해야한다는 필요성을 느꼈다. 
아래는 버전에 대한 warning의 예시
[Terminal ScreenShot](https://user-images.githubusercontent.com/15559593/126332486-70e4c961-6769-4a94-b809-479639304cc0.PNG)

- npm install -g npm-install-peers
- dependency 쫓아 모듈 버전관리 해주기
- 버전 업데이트 시 순차적으로......!
-------------------
firebase 설치시에  GRPC(오픈 소스 원격 프로시저 호출 시스템)가 더 이상 업데이트 되지않아 @grpc/grpc-js로 변경해주었다.
기존 것 uninstall과정에서  core-js가 자동으로 설치되는 과정이 있었는데, 각 모듈의 기능이 무엇인지 알아보아야겠다.
