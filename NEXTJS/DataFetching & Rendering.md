# Data Fetching & Rendering on Nextjs
***

  - Static generation
  - Server-side Rendering

***

## `getStaticProps(Static)`

  - Fetch data at build time, HTML을 빌드타임에 구성
  ```JS
  export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
  }
  ```
  ```js
    function Blog({ posts }) {
    // Render posts...
    }

    // This function gets called at build time
    export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
      }
    }

    export default Blog
  ```
  - `development` vs `production`
    - dev(npm run dev, yarn dev)시에는 요청시마다
    - production에서는 빌드타임에 수행된다, 리턴되는 fallback으로 조절가능
    - 빌드타임에 수행되니까 요청시에 필요한 query parameter나 http 헤더와 같은 건 사용불가

  - **context** ( parameter )
    - `params` : parameters for pages using dynamic routes, (with getStaticPath)
    - `preview` : true if page is preview mode or undefined
      - [Preview mode](https://nextjs.org/docs/advanced-features/preview-mode)
    - `previewData` : data set by setPreviewData
    - `locale` : contains active locale ( Internationalized Routing )
      - [IR](https://nextjs.org/docs/advanced-features/i18n-routing)
    - `locales` : all supported locales
    - `defaultLocale`

  - **Returns(object)**
    - `props` : optional if component needs, should be a serializable object
    - `revalidate` : optional ,seconds after which a page re-generation can occur(default false)
      - [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)
    - `notFound`: optional, boolean, allow the page to return a 404 status
    ```js
    //not found is not needed when fallback : false
    //notFound: true the page will return a 404 even if there was a successfully generated page before
    export async function getStaticProps(context) {
    const res = await fetch(`https://.../data`)
    const data = await res.json()

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }, // will be passed to the page component as props
    }
    ```

## `getStaticPath(Static)`
  - Specify dynamic routes to pre-render pages based on data.
  ```js
  // This function gets called at build time
  export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
  }

  ```

## `getServerSideProps(SSR)`
  - Fetch data on each request, 각 요청마다 HTML 구성
  - parameter인 context에 요청사항을 담음
  - 요청시에 데이터가 fetch되어야하는 페이지를 pre-render할 때만 사용할 것
  - TTFB(time to first byte)은 getStaticProps보다 느릴것임(서버가 요청마다 계산 추가 설정없이 cdn에 캐시되지 않음)
## `CSR`
  - `SWR` -> React hook, Caching, Revalidation, Focus tracking, refetch(interval)
  ```js
  import useSWR from 'swr'

  function Profile() {
    const { data, error } = useSWR('/api/user', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
  }
  ```

##


## `memo`
  - hydration -> 사전 렌더링으로 생성된 HTML이 브라우저에서 로드되면 JS가 실행되고 페이지가 Interactive 해지는 과정
  - Pre-rendering되는지 확인하는법 -> 브라우저의 js disable 후 page access
 ![image](https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png)
 ![image](https://nextjs.org/static/images/learn/data-fetching/no-pre-rendering.png)
#### reference
- [nextjs Docs](https://nextjs.org/docs/basic-features/data-fetching)

