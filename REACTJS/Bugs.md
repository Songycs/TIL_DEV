
```
Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in wrappedComponent
```
> 경고! 언마운티드된 컴포넌트에 대해서는 상태 업데이트를 수행할 수 없다.
해당 작업은 수행되지 않지만 메모리 누수가 발생된다. 해결방법으로 useEffect의 cleanup function을 이용할것.
> > 해당 state를 관리하던 컴포넌트가 사라졌기 때문에 state를 업데이트 할 수 없다는 에러
