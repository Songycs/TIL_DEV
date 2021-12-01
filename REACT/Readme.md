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
- `useState`
  - class의 setState와 다르게 update objects를 자동으로 합치지 않음 다음의 예시 대로 or useReducer
  ```js
  const [state, setState] = useState({});
  setState(prevState => {
    // Object.assign would also work
    return {...prevState, ...updatedValues};
  });
  ```
  - initialState로 초기 렌더링 시에만 실행되게할 함수를 제공할 수 있음(고비용 etc)
  ```js
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  });
  ```
  - 내부적으로 Object.is 비교 알고리즘으로 값이 변경되었는지를 확인하여 렌더링여부 판단함


- `useEffect`
  - useEffect로 전달된 함수는 레이아웃배치와 그리기가 완료한 후 발생함.
  - DOM변경은 다음화면을 다 그리기 전에 동기화될 필요가 있으므로(사용자 경험) `useLayoutEffect` 학습할 것
  - 여러번 렌더링 시에 다음 effect가 수행되기 전에 이전 effect가 정리된다.
  - 컴포넌트가 제거될때 수행될 clean-up함수 반환가능
  ```js
  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  });
  ```


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


- `useMemo`
  - memoization된 value를 반환, 함수 전달시 렌더링 중에 실행(유의)
  - 함수형컴포넌트 내부함수 연산 최적화(?)
  - 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고
      만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- `useContext`:
  - <Context.Provider>, <Context.Consumer>
  - useContext로 전달한 인자는 context 객체 그 자체여야함
  - useContext를 호출한 컴포넌트는 context 변경시 리렌더링, 필요시 memoization으로 최적화 가능
  ```js
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  const ThemeContext = React.createContext(themes.light);

  function App() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
  ```

- `useCallback`
  - 렌더닝 성능 최적화 ex) 이벤트핸들러함수 필요시에만 생성(컴포넌트 리렌더링때마다 함수가 새로 생성됨)
  - memoization된 callback을 반환함, 자식컴포넌트에 콜백 전달시 유용
  ```js
    const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
  ```

- `useRef`
  - current property에 ref가 걸린 dom node 속성을 설정함
  - 변경을 캐치하지 않음(리렌더링되지않음)
  ```js
    function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  ```



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
  - `SOC`: separation of concerns
***

### Reference
-[REACT](https://ko.reactjs.org/docs/react-component.html)
---------------------------------------

