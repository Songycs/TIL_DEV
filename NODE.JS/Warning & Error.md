
# 아무 생각없이, node 버전을 업데이트하고, module폴더& package-lock.json을 삭제 후 npm install 등으로 모듈을 설치했다. 
# 버전이 변경됨에 따라 호환되지않는 모듈도 있었고, 그에따라 연쇄적으로 작동하지 않는 모듈들이 생겼다.

[Terminal ScreenShot](https://user-images.githubusercontent.com/15559593/126332486-70e4c961-6769-4a94-b809-479639304cc0.PNG)

- npm install -g npm-install-peers
- dependency 쫓아 모듈 버전관리 해주기



# firebase 설치시에  GRPC(오픈 소스 원격 프로시저 호출 시스템)가 더 이상 업데이트 되지않아 @grpc/grpc-js로 변경해주었다.
# 기존 것 uninstall과정에서  core-js가 자동으로 설치되는 과정이 있었는데, 각 모듈의 기능이 무엇인지 알아보아야겠다.
