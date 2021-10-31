# GIT

***

 git에 대해 공부한 것, 경험한 것 기록

***

### Basic

- `commit`
   - git commit -m “<메시지>”
   - git commit -m “<메시지>” -a ( 모든 추적되는 변경사항 commit하기 )
   - git commit -m “<메시지>” --amend ( 마지막 commit 고치기 )
   - git commit -C HEAD --amend ( 마지막 commit 고치기 및 메세지 재활용 )
   - git reset HEAD <파일> [<파일>]( 마지막커밋취소 )
   - git status (파일 상태 확인)

- `branch`
   - git checkout HEAD <파일> [<파일>]( 커밋없이스테이징된변경사항재설정 )
   - git branch ( branch 목록보기, -r -> remote branch 목록보기, -a -> 한번에 다 보기 )
   - git branch <새로운 브랜치> ( 새 branch 생성 )
   - git branch -d <브랜치> ( 브랜치 삭제 )
   - git checkout -b <브랜치> ( branch 생성 및 checkout )
   - git checkout 해시값 ( 해당 해시 버전으로 돌아감 )
   - git branch ( branch 목록 )
   - git checkout -- <파일명> (로컬 변경사항 변경 전으로 되돌림)


- git log ( 현재 브랜치 커밋 내용 확인, 식별자 부여)

- `merge`
   - commands:
      - git merge <branch name>
      - git diff <branch명> <다른 branch명> (merge이전 변경내용 비교)
      - git add <파일>
      - git add -p [<파일> [<파일> [기타 파일들…]]] (git대화모드 활용 add)


   - fast-forward merge
   - 3-way merge

- `push`
   - git push origin master
   - git push <remote> <브랜치 이름>

- `fetch`
   - git fetch origin

- `pull`
   - git pull ( remote 변경점이 현재 directory에 fetch +_merge)
- `options`

***

### Repository

- git clone <저장소 url>
- git remote add <원격 저장소> <저장소 url> (원격 저장소 추가)
- git remote remove <저장소 url> ( 삭제 )


***

### Error experiences

 - master -> master (non-fast-forward)
 (.gitignore 파일 또는 README.md 문제, push 대상에 +를 붙인다, git push origin +master)

 - error: src refspec master does not match any
    - git에서 pull없이 push할 경우 기존 내용이 삭제되는등의 문제가 생길 수 있음을 방지하기위함
    - branch명 때문일 수도(ex) main)

***

### set user ( global, per repo )

- git config --global user.name “Your name”
- git config --global user.email “Your email address”
- git config --global --list

- git config user.name “Your name”
- git config user.email “Your email address”
- git config --list

***

### convention

- `commit`
   - fix, feat, docs, style, refactor, test, chore
   - subject : 50자 이내, 대문자 작성, 마침표 없이, 과거시제 x
   - body : 선택적, 부연설명 필요 시 , 72자 이내, 제목과 구분
   - footer : 선택적, issue tracker(Fixes, Resolves, Ref, Related to) id 작성시 사용 
      - Fixes: #11 Related to: #22, #33 
   - 예시(출처: https://doublesprogramming.tistory.com/256)

- `branch / naming`
   - master(main) : 제품 출시 가능 브랜치, Release 버전 소스 (배포 이력 관리) / master
   - develop : 다음 출시 버전 개발 브랜치, 개발 버전 소스 / develop 
   - feature : 기능을 개발하는 branch, develop에서 분기,  개발 완료시 develop와 병합 / feature - issue_number
   - release : 이번 출시 버전을 준비하는 브랜치 / release - version_number 
   - hotfix : 출시 버전에서 발생한 버그 수정 하는 브랜치 ( master branch 오류 수정 ) / hotfix - issue_number
      - feature -> develop -> master가 아닌 급한 master의 수정시 활용, master로 병합

***

### Emoji

***

### memo

- `.` : 폴더 내의 모든 것


***

### reference
- [더블에스 devlog, 커밋 메시지 컨벤션](https://doublesprogramming.tistory.com/256)
- [git flow 브랜치 규칙](https://iamcho2.github.io/2021/03/22/branch-rule-git-flow)