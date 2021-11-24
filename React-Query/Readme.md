# React-Query

> Fetch, cache and update data in your React and React Native applications all without touching any "global state".
  - 서버에서 가져오는 데이터도 하나의 상태이다.
  - Redux와 같은 전역 상태관리 라이브러리가 서버단에서 불완전할 수 있다. ( 최신상태 여부 등 )
  -
### Concept
***

  - `No Global state` ( seperate client, server side state )
    - Client state : 세션간 지속적이지 않은 데이터, 동기적, 클라이언트가 소유, 항상 최신(렌더링됨)
    - Server state : 세션간 지속, 비동기적, 공유되는 데이터도 존재( 타 클라가 수정 ), 서버데이터의 스냅샷을 활용하므로 데이터의 최신을 보장할 수 없음

  - `Query Key`
    -
    ```JS
    useQuery(['todo', 5, { preview: true }], ...)
    // queryKey === ['todo', 5, { preview: true }]

    //considered equal (order of keys in object is no matter)
    useQuery(['todos', { status, page }], ...)
    useQuery(['todos', { page, status }], ...)
    useQuery(['todos', { page, status, other: undefined }], ...)

    //considered not equal (Array item order matters)
    useQuery(['todos', status, page], ...)
    useQuery(['todos', page, status], ...)
    useQuery(['todos', undefined, page, status], ...)

    //query function with variable, include variable in query key
    function Todos({ todoId }) {
      const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
    }
    ```
    -
  - `Query State`
    - useQuery 반환 객체의 property로 상태 확인
    - fresh : 새롭게 추가된 쿼리 인스턴스 (active 상태 시작)
    - fetching : 요청을 수행하는 중
    - stale : 인스턴스 존재 (fetching 완료), 특정 쿼리가 stale되면 같은쿼리가 호출되었을때 캐싱데이터 반환
    - inactive : active인스턴스가 없는 쿼리, 5분간격 gc

  - `Refetching`
    - runtime간 특정 쿼리 인스턴스가 다시 만들어졌을때
    - window가 다시 포커싱되었을때
    - 네트워크 재연결 시
    -  refetch interval이 있을때 ( retry, retryDelay 옵션으로 커스텀 )
      ```JS
        import { useQuery } from 'react-query'
        const result = useQuery(['todos', 1], fetchTodoListPage, {
          retry: 10, // 에러를 display할 때까지 10번을 더 호출한다.
        })
      ```

  - `Caching`
    - useQuery의 새로운 인스턴스 mount => 최초 fresh한 해당쿼리 호출시 패칭 중 캐시변수 변경(unique key로 구별), fetching끝나면 해당쿼리를 stale로 변경
    - useQuery 두번째 인스턴스 mount => stale일 경우 패치없이 캐시 반환
    - 일정 시간 후 refetch시 캐시 업데이트
    - 쿼리가 unmount / 사용되지 않을때, 마지막 인스턴스가 unmount되어 inactive상태되고 5분 뒤 자동삭제
  - `Boilerplate`
    - success, fail action을 모두 정리할 필요 없음, key가 같으면 동일 쿼리 & 데이터에 접근 가능

  - `Integrity`
    - 비동기 요청
    - 최신 데이터
  - `Parallel`
    ```JS
    // 병렬로 처리 됨, 동시성 극대화
    function App () {
    const usersQuery = useQuery('users', fetchUsers)
    const teamsQuery = useQuery('teams', fetchTeams)
    const projectsQuery = useQuery('projects', fetchProjects)
    }

    // useQueries로 렌더링 사이에 쿼리 수행
    function App({ users }) {
      const userQueries = useQueries(
        users.map(user => {
          return {
            queryKey: ['user', user.id],
            queryFn: () => fetchUserById(user.id),
          }
        })
      )
    }
    ```
  - `Mutations`
  - `Invalidation`
***
### Feature / Example
***
  - `useQuery`

***

### Related
***
  - `Context API`

***
#### Reference
  - [CodeEvolution](https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2)
  - [REACT-QUERY DOCS](https://react-query.tanstack.com/overview)
  - [maxkim blog](https://maxkim-j.github.io/posts/react-query-preview)
