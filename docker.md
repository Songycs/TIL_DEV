# docker

#### outline
***
컨테이너를 가벼운 모듈식 가상머신처럼 다룰 수 있다.
컨테이너를 구축, 배포, 복사하여 여러 환경에서 유연하게 사용가능 -> 클라우드 최적화
  
  - Linux 커널과 함께 커널의 기능(cgroups , namespace)을 사용하여 프로세스를 독립적으로 실행되게함 
  - 프로세스/APP을 개별적으로 실행하여 인프라를 효과적으로 활용하고, 보안을 유지함
  - 이미지 기반 배포 모델을 제공, 여러 환경에서 APP/SERVICE를 종속항목과 손쉽게 공유, 배포 자동화 
  - ``장점``
    - 모듈성 ( 어플리케이션 일부를 업데이트, 복구 혹은 soa(service-oriented architecture) 방식으로 프로세스 공유
    - 계층 및 이미지 버전제어 ( 이미지 파일은 일련의 계층으로 이루어져 있음, 이를 재사용하여 속도 향상 )
    - 롤백 ( CI/CD 수행에 도움, Agile 개발 방식 지원 ) 
    - 신속한 배포
  - docker는 단일 컨테이너 관리에 적합 -> 컨테이너가 많아지면 네트워크, 보안 등의 이슈로 그룹화를 위해 쿠버네티스 활용   

***

#### Kubernetes


#### 실습
  - ``mysql(Todolist)``
  ![image](https://user-images.githubusercontent.com/15559593/139334987-25804bf7-b3ff-46f7-ba56-58ec8c77489a.png)
  
  ```
  docker run -p 3306:3306 --name todolist -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=todolist_db -e MYSQL_USER=huni -e MYSQL_PASSWORD=1234 -d mysql
  ```
  ![image](https://user-images.githubusercontent.com/15559593/139335196-a0722bc4-7d9c-4b75-a933-5ee1725969de.png)



#### ex


#### reference
- [redhat](https://www.redhat.com/ko/topics/containers/what-is-docker)
- [얼쑤](https://www.youtube.com/watch?v=NxmlF2AqhBU)

