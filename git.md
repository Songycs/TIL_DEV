About git

### Basic
-git clone <저장소 url>
-git remote add <원격 저장소> <저장소 url> (원격 저장소 추가)
-git add <파일>
-git add -p [<파일> [<파일> [기타 파일들…]]] (git대화모드 활용 add)
-git commit -m “<메시지>”
-git commit -m “<메시지>” -a ( 모든 추적되는 변경사항 commit하기 )

-git checkout HEAD <파일> [<파일>] ( 커밋없이 스테이징된 변경사항 재설정 )
-git reset HEAD <파일> [<파일>] ( 마지막 커밋 취소 )


### set user ( global, per repo )
-git config - -global user.name “Your name”
-git config - -global user.email “Your email address”
-git config - -global - -list

-git config user.name “Your name”
-git config user.email “Your email address”
-git config - -list

### [rejected!]
 - master -> master (non-fast-forward)
 (.gitignore 파일 또는 README.md 문제, push 대상에 +를 붙인다, git push origin +master)
