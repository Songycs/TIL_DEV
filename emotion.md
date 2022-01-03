# Emotion


***
## `Feature`

- CSS-IN-JS, className 자동부여(중복x), 재사용성
- Object style vs String Style
  ```js
  //Object
  import { jsx } from '@emotion/react'

  render(
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen'
        }
      }}
    >
      This has a hotpink background.
    </div>
  )
  //String
  import { css, jsx } from '@emotion/react'
  const color = 'darkgreen'

  render(
    <div
      css={css`
        background-color: hotpink;
        &:hover {
          color: ${color};
        }
      `}
    >
      This has a hotpink background.
    </div>
  )
  ```
- props
  ```js
  import { jsx } from '@emotion/react'

  const P = props => (
    <p
      css={{
        margin: 0,
        fontSize: 12,
        lineHeight: '1.5',
        fontFamily: 'sans-serif',
        color: 'black'
      }}
      {...props} // <- props contains the `className` prop
    />
  )

  const ArticleText = props => (
    <P
      css={{
        fontSize: 14,
        fontFamily: 'Georgia, serif',
        color: 'darkgray'
      }}
      {...props} // <- props contains the `className` prop
    />
  )

  const SmallArticleText = props => (
    <ArticleText
      css={{
        fontSize: 10
      }}
      {...props} // <- props contains the `className` prop
    />
  )
  ```
  ```css
  .css-result {
    + margin: 0;
    - font-size: 12px;
    + line-height: 1.5;
    - font-family: 'sans-serif';
    - color: black;
    - font-size: 14px,
    + font-family: Georgia, serif,
    + color: darkgray;
    + font-size: 10px;
  ```
- nested selectors
  ```js
  import { jsx, css } from '@emotion/react'

  // #1
  const paragraph = css`
    color: turquoise;

    a {
      border-bottom: 1px solid currentColor;
      cursor: pointer;
    }
  `
  render(
    <p css={paragraph}>
      Some text.
      <a>A link with a bottom border.</a>
    </p>
  )
  //#2
  const paragraph = css`
  color: turquoise;

  header & {
    color: green;
  }
  `
  render(
    <div>
      <header>
        <p css={paragraph}>
          This is green since it's inside a header
        </p>
      </header>
      <p css={paragraph}>
        This is turquoise since it's not inside a header.
      </p>
    </div>
  ```
- media query
```js
import { jsx } from '@emotion/react'

render(
  <div
    css={{
      color: 'darkorchid',
      '@media(min-width: 420px)': {
        color: 'orange'
      }
    }}
  >
    This is orange on a big screen and darkorchid on a small
    screen.
  </div>
)


// Reusable Media Queries

import {  css } from '@emotion/react'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

render(
  <div>
    <div
      css={{
        color: 'green',
        [mq[0]]: {
          color: 'gray'
        },
        [mq[1]]: {
          color: 'hotpink'
        }
      }}
    >
      Some text!
    </div>
    <p
      css={css`
        color: green;
        ${mq[0]} {
          color: gray;
        }
        ${mq[1]} {
          color: hotpink;
        }
      `}
    >
      Some other text!
    </p>
  </div>
)
```
- vendor-prefixing
- composition
```js
import { css } from '@emotion/react'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
)
```
## `Advanced`
- Keyframes
- SSR
- Theme
- Labels
- Cache
- Attaching Props

## `MEMO`

- styled-component 사용방식 + css props 기능
- 파일 사이즈가 작고, ssr시 서버 작업이 필요 없다(?)

## `Reference`
- [emotion docs](https://emotion.sh/docs/introduction)