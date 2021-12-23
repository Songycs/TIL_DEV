# Optimizing react performance

- **state와 props의 변경을 최소화하는 것**
- **불필요한 리렌더링을 최소화하는 것**
  - 렌더링 -> `props변경, state변경, forceUpdate(), 부모 컴포넌트 렌더링`

-------------------
- 컴포넌트 매핑시에 key값으로 index사용하지 말 것(삽입 등 순서 변경되지 않는다면 가능)
- 하위 컴포넌트 props로 객체를 넘겨주는 경우 `새 객체 생성 유의`해야함 -> 리렌더링마다 새 객체 ->state그대로 넘겨주기
- 단방향 하향식 데이터흐름을 이해할 것
- 컴포넌트 구조를 명확하고 직관적으로 최소화할 것 -> 리렌더링 줄이고 유지보수 굿
- 데이터 적으로는 state의 설계(ui에서 사용하기 편한 구조로), api설계가 중요함
- 함수는 리터럴로 생성하지 말 것(불변데이터가 아니므로 동일증명 번거로움)
# hooks
  ## `useMemo()`
  - 종속 변수가 변하지않으면 함수호출 없이 반환된 참조값을 재사용
  - 함수호출시간을 save, 같은 값을 props로 받는 하위 컴포넌트 리렌더링 방지
  ```js
  //종속변수가 안변하면 이전에 반환된 참조값 재사용
  const average = useMemo(() => {
    console.log("calculate average. It takes long time !!");
    return users.reduce((acc, cur) => {
      return acc + cur.score / users.length;
    }, 0);
  }, [users]);
  ```
  ## `useCallback()`
  - 함수 선언을 memoize
  - 종속 변수가 변하지않으면 굳이 함수 재생성x, 참조변수 그대로 하위 props전달
  - 하위 컴포넌트로 props가 변경되지 않았다고 판단하여 리렌더링x
  - react.memo활용 시 ex) 화살표함수 활용시 리렌더링마다 새 참조함수로 새로운 함수선언 전달됨 -> react.memo는 얕은비교를 하므로 다른 결과가 들어왔다고 이해함
  ```js
    function App() {
      const check = 90
      const [count, setCount] = useState(0)
      const clickHndlr = useCallback(()=> { setCount(check) }, [check]);
      return (
          <>
              <button onClick={()=> setCount(count + 1)}>Set Count</button>
              <TestComp func={clickHndlr} />
          </>
      )
  }
  ```
  ## `List 가상화`
  - **windowing**
  - 큰 리스트를 렌더링한다면 viewport에 보여지는 부분 렌더링 후 스크롤하면서 보여지도록하는 것
  - react-window, react-virtualized 등 활용
  ## `lazy loading`
  - [참고용](https://kurthutten.com/blog/react-hook-lazy-loading-pattern/)
  ## `caching functions`
  - 입력값이 같으면 캐시처리하여 같은 값을 리턴하도록 함
  ```js
    function expensiveFunc(input) {
    ...
    return output
    }
    const memoizedExpensiveFunc = memoize(expensiveFunc)
    class ReactCompo extends Component {
        render() {
            return (
                <div>
                    {memoizedExpensiveFunc}
                </div>
            )
        }
    }
  ```
  ## `Reselect selectors`
  - redux 상태관리 최적화, reselect라이브러리, redux의 상태를 얕게 체크함
  - immutable하다는 것은 action이 dispatch할때마다 객체 참조가 생성된다는 것
  - 컴포넌트에서 변경되지 않아도 오브젝트 참조 변경시 리렌더링됨 -> 성능 저하 가능
  - 필드가 변경되지 않은경우 새로운 상태 객체가 생성되어도 리렌더링 취소함
  ## `Web worker`
  - 쓰레드에서 오래걸리는 프로세스 실행 시의 성능이슈 완화, 병렬적 수행
  - 다른쓰레드로 옮겨줌, ui흐름 방해없이 메인쓰레드와 동시 실행되는 gateway
  ```js
  // webWorker.js
  const worker = (self) => {
      function generateBigArray() {
          let arr = []
          arr.length = 1000000
          for (let i = 0; i < arr.length; i++)
              arr[i] = i
          return arr
      }
      function sum(arr) {
          return arr.reduce((e, prev) => e + prev, 0)
      }
      function factorial(num) {
          if (num == 1)
              return 1
          return num * factorial(num - 1)
      }
      self.addEventListener("message", (evt) => {
          const num = evt.data
          const arr = generateBigArray()
          postMessage(sum(arr))
      })
  }
  export default worker
  // App.js
  import worker from "./webWorker"
  import React, { Component } from 'react';
  import './index.css';
  class App extends Component {
      constructor() {
          super()
          this.state = {
              result: null
          }
      }
      calc = () => {
          this.webWorker.postMessage(null)
      }
      componentDidMount() {
          let code = worker.toString()
          code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"))
          const bb = new Blob([code], { type: "application/javascript" });
          this.webWorker = new Worker(URL.createObjectURL(bb))
          this.webWorker.addEventListener("message", (evt) => {
              const data = evt.data
              this.setState({ result: data })
          })
      }
      render() {
          return (
              <div>
                  <button onClick = { this.calc }> Sum </button>
                  <h3> Result: { this.state.result }</h3>
              </div>
          )
      }
  }
  ```

  ## `React.memo()`
  - hooks에서 shouldComponentUpdate 대체, class에서도 활용가능(별로, pureComponent나 should)
  - 컴포넌트 캐싱, 컴포넌트 래핑으로 props 비교하여 리렌더링을 막는 메모이제이션
  - callback함수로 메모이제이션 적용여부 가능
  - 얕은 비교 ( 원시값 -> 같은 값인지, 객체 및 배열(참조값)은 같은주소값을 갖는지)
  - memoization용 추가 메모리 발생
  - `활용`
    - 함수형 컴포넌트에 같은 props, 같은 렌더링 결과 제공시
    - 컴포넌트에 UI elemenet양이 많은 경우
    - Pure Functional Component인 경우
  ```js
    const Button: React.FC<IBtnProps> = ({btn,handleOnClick}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnClick(btn)}>
        <Text>{btn}</Text>
      </TouchableOpacity>
      );
    };

    export default memo(Button);

    function My(props) {
    return (
        <div>
            {props.data}
        </div>
    )
    }
    const MemoedMy = React.memo(My)
    function App() {
        const [state, setState] = useState(0)
        return (
            <>
                <button onClick={()=> setState(0)}>Click</button>
                <MemeodMy data={state} />
            </>
        )
    }
  ```
# only for class
  ## `React.PureComponent`
    - 불변성 보장 필요, shouldComponentUpdate 대체
  ```js
    class ReactComponent extends React.PureComponent {
      constructor(props, context) {
          super(props, context)
          this.state = {
              data: null
          }
          this.inputValue = null
      }
      handleClick = () => {
          this.setState({data: this.inputValue})
      }
      onChange = (evt) => {
          this.inputValue = evt.target.value
      }
      render() {
          l("rendering App")
          return (
              <div>
                  {this.state.data}
                  <input onChange={this.onChange} />
                  <button onClick={this.handleClick}>Click Me </button>
              </div>
          )
      }
    }
  ```
  ## `shouldComponentUpdate`
## `MEMO`
- **memoization**:
- bit(github)

## `Reference`
- [uzilog](https://uzihoon.com/post/ef453fd0-ab14-11ea-98ac-61734eebc216)
- [shin6403](https://velog.io/@shin6403/React-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EB%8A%94-7%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-Hooks-%EA%B8%B0%EC%A4%80)
- [shin6403](https://velog.io/@shin6403/React.memo-useCallback-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0feat.React-NativeRedux)
- [기본따라코딩](https://cocoder16.tistory.com/36)