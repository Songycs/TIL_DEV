# CI/CD


|![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3WY5f%2FbtqI5zz0OUH%2FN5KhjwQ3SP9nYplyZrXuVK%2Fimg.png)|
|:--:|
| *REDHAT* |
- CI/CD는 애플리케이션 개발 단계를 자동화하여 애플리케이션을 보다 짧은 주기로 고객에게 제공하는 방법
- 팀의 코드 통합과정에 개발 및 운영팀에 생기는 문제 방지(커뮤니케이션 부족 문제 해결)
- CI/CD 파이프라인으로 구현되는 실제 프로세스 의미, 개발의 지속적인 자동화 및 모니터링 추가하는 것
***

## `CI(Continuous Integration, 지속적 통합)`

- 어플리케이션에 대한 코드변경사항이 정기적으로 빌드 및 테스트되어 공유 repo에 통합 -> 충돌 문제 방지
- `MSA(Micro Service Architecture)`에서 유리
- 병합 -> 동작 확인 및 빌드 -> 테스트 (빌드/테스트 자동화 과정)
- 팀별로 CI Script, unit text 등이 다를 것


## `CD(Continuous Delivery or Deploy, 지속적 제공 or 배포)`
- Release를 준비하는 단계( 수동 or 자동 )
- `Delivery(제공)`:개발자가 적용한 변경사항이 버그테스트를 거쳐 repo에 자동으로 업로드 되는 것, 운영팀은 이를 프로덕션환경으로 배포할 수 있음
- `Deployment(배포)`: 개발자의 변경사항을 repo에서 고객이 사용 가능한 프로덕션 환경까지 자동으로 release하는 것

|![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeeSLmu%2FbtqI9pXqCN8%2FiIopSPh3KSK1SwhRjkWPf1%2Fimg.png)|
|:--:|
| *gocd.org* |

## `TOOLS`
- bold는 공부 해볼 것들
- **Github Actions**
- **Vercel**
- **Jenkins**
- Bitbucket pipelines
- CircleCI
- TravisCI

## `MEMO`
  - DevOps
  - Agile

## `Reference`
- [개발자김모씨](https://artist-developer.tistory.com/24)
- [드림코딩 by 엘리](https://www.youtube.com/watch?v=0Emq5FypiMM)