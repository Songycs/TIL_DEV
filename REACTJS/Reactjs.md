# ReactJS

***

react에 대한 기록

웹 기초 재정립 - react 시작 (21.11.01)

***

### Why React?

***

### `React Hook`

  - class없이 컴포넌트를 활용하기 위함, 심플 but 빠른 성능
  - 함수형 컴포넌트의 기능/구현방법들을 클래스형 컴포넌트의 구현방법들과 비교하여 공부하고, 
    각각에 대한 이해도를 높일 것, hooks를 이해하는 동시에 리액트의 lifeCycle에 대한 이해도를 높일 것
  - HOC (Higher Order Component) Component -> Custom React hooks ( Wrapper component를 줄임 )

- `Reducer`
  - useReducer : 첫번째 인자로 넘어오는 reducer 함수를 통해 컴포넌트의 상태(state)가 행동(action)에   
                 따라 어떻게 변해야하는지를 정의 . 즉, 상태가 변화하는 로직을 담은 함수 
      ```
      const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
      ```
      - 복잡한 상태관리에 대해 useState대신 활용가능, Redux의 상태관리와 유사
      - dispatch 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용
      - 컴포넌트에서 dispatch 함수에 행동(action)을 던지면, reducer 함수가 이 행동(action)에 따라서 상태(state)를 변경
      - Switch 분기로 직관적으로 작성가능, 정의하지 않은 action.type에 예외처리 잘할 것
      - action 객체는 type 속성과 해당action 괸련된 데이터를 담음
      - 다만 action객체가 반드시 type을 가져야하는 것은 아니고, 객체가 아니라 문자열 혹은 숫자 등이어도 무관
      ```js
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
  - action : event와 유사, 실행 후 type 반환
  - dispatch : action을 전달하는 과정을 칭함 (store개념과 같음)
  - [REACT와 Redux의 플로우 이해](https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6)

- `useMemo`: 함수형컴포넌트 내부함수 연산 최적화(?)
    - 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고   
      만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용
- `useContext`:
- `useCallback`:렌더닝 성능 최적화 ex) 이벤트핸들러함수 필요시에만 생성(컴포넌트 리렌더링때마다 함수가 새로 생성됨)
- `useRef`:

- ***`custom Hook`***

***

### LifeCycle

- ***class***

  - `Mount`
    - constructor 
    - getDerivedStateFromProps(props, state) 비교
    - render component
    - update DOM
    - ComponentDidMount 

  - `Update`
    - props, state update 시
    - getDerivedStateFromProps에서 props, state비교
    - shouldComponentUpdate실행 - new props,state 확인 후 render 결정
    - re - render
    - update DOM
    - ComponentDidUpdate 

  - `Unmount`
    - componentWillunmount 

- ***Hook***

  - useEffect가 생명주기 대체
  - 활용예시 코드로 첨부예정

***

### React Pattern

- 구현 및 이해 요망, 장단점 확인
- 테스트 가능성, 재사용성, API 활용성, 확장성, 통일성

- Presentational and Container Component Pattern
- Atomic Design Pattern
- Compound Components Pattern
- Control Props Pattern
- Custom Hook Pattern
- Props Getters Pattern
- State reducer pattern
- observer, provider 
- humble object 

***

### Redux

***

### memo

  - `JSX`: Javacscript XML

***

### Reference
-[REACT](https://ko.reactjs.org/docs/react-component.html)
---------------------------------------

