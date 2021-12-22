# Anything from nextjs docs
  docs 읽다가 필요할 때 메모하는 곳
***

## `memo`

- Client-side navigation -> Link로 a태그를 감쌈
  ```html
    <Link href="/posts/first-post">
      <a>this page!</a>
    </Link>
  ```
- css, sass 지원이 내장되어있음 (styled-jsx) / styled-component,tailwind 사용 지원
- global css 따로, **_app.js에 import할것**
  ```js
    import '../styles/global.css'

    export default function App({ Component, pageProps }) {
      return <Component {...pageProps} />
    }
  ```
- Polishing Layout
- PostCSS
- `toggle className`
  ```js
  import styles from './alert.module.css'
  import cn from 'classnames'

  export default function Alert({ children, type }) {
    return (
      <div
        className={cn({
          [styles.success]: type === 'success',
          [styles.error]: type === 'error'
        })}
      >
        {children}
      </div>
    )
  }
  ```
- import Image from 'next/image'
  - 이미지 유저 요청에 따라 on-demand 최적화, 빌드타임 늘지 않음
  - 이미지들은 기본적으로 lazy-load됨 -> viewport 외부의 이미지에도 불리함x
- Head는 nextjs에 내장된 리액트 컴포넌트임
  - metadata 설정
  - third-party js scripts
    - 특정 스크립트가 렌더링차단, 컨텐츷 로딩을 딜레이시키면 성능저하 가능
    - import Script from 'next/script'
    ```html
          <Head>
            <title>First Post</title>
            <script src="https://connect.facebook.net/en_US/sdk.js" />
          </Head>

          //import scripts
          <Head>
            <title>First Post</title>
          </Head>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload" // 스크립트 로드시기 제어
            //완료직후 실행될 js코드
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            }
          />
    ```
#### reference
- [nextjs Docs](https://nextjs.org/docs/basic-features/data-fetching)

