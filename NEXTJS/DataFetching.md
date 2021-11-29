# Data Fetching on Nextjs
***

  - Static generation
  - Server-side Rendering

***

## `getStaticProps(Static)`

  - Fetch data at build time
  ```JS
  export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
  }
  ```

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

## `getServerSideProps(SSR)`
  - Fetch data on each request

## Project component example


#### memo

#### reference
- [nextjs Docs](https://nextjs.org/docs/basic-features/data-fetching)

