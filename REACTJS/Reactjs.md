***ReactJS***
  - what I learned about Reactjs
  - Especially 'Important' or 'Hard'
---------------------------------------
### `React Hook`
- `Reducer`
  - useReducer : 첫번째 인자로 넘어오는 reducer 함수를 통해 컴포넌트의 상태(state)가 행동(action)에 따라 어떻게 변해야하는지를 정의
      ```
      const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
      ```
      - 복잡한 상태관리에 대해 useState대신 활용가능
      - dispatch 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용
      - 컴포넌트에서 dispatch 함수에 행동(action)을 던지면, reducer 함수가 이 행동(action)에 따라서 상태(state)를 변경
      - Switch 분기로 직관적으로 작성가능, 정의하지 않은 action.type에 예외처리 잘할 것
      - action 객체는 type 속성과 해당action 괸련된 데이터를 담음 
      ```
      const initialState = { count: 0 };
      function reducer(state, action) {
        switch (action.type) {
          case "INCREMENT":
            return { count: state.count + action.step };
          case "DECREMENT":
            return { count: state.count - action.step };
          default:
            throw new Error("Unsupported action type:", action.type);
        }
      }
      ```
- `Dispatcher`


---------------------------------------
### `탐색 기법`
---------------------------------------
### `Dijkstra` 
---------------------------------------
### `Kruscal`
---------------------------------------
### `floyd-warshall ` 
---------------------------------------
### `출처` 
 - 탐색유형(https://m.blog.naver.com/occidere/220923695595)
    
