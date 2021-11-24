# WEBPACK

---

![image](https://user-images.githubusercontent.com/15559593/137744097-0d1c6b11-d5f1-4618-83ef-11ce93473135.png)

---

  - webpack은 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러
  - 여러개의 JS파일을 하나의 파일로 묶어 한 번의 요청으로 받을 수 있게함
  - 압축, 최적화등의 과정으로 초기로딩 속도 영향 ( Chunk, cache, code split 등 추후 학습)
  - webpack이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나
이상의 번들을 생성하는 디펜던시 그래프를 만듬

---

#### Concept

- `Entry(엔트리)`

  - webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈
  - webpack은 엔트리포인트가 의존하는 다른 모듈 및 라이브러리를 찾아낸다
  - .src/index.js 외에 다음과 같이 여러 엔트리 추가 가능
  - ![image](https://user-images.githubusercontent.com/15559593/137744841-c4ce5c9c-17c2-4f44-801f-3c7688633687.png)
  - [entry point](https://webpack.kr/concepts/entry-points/)

- `Output(출력)`

  - 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack에 알려주는 역할
  - 기본 출력 파일의 경우에는 ./dist/main.js로 , 생성된 기타 파일의 경우에는 ./dist 폴더로 설정
  - 다음과 같이 output 필드 지정가능
  - ![image](https://user-images.githubusercontent.com/15559593/137744998-cf72e19d-35fb-480a-ad64-f5bee2162d30.png)
  - [output](https://webpack.kr/configuration/output/)

- `Loaders(로더)`

  - JS파일이 아닌 파일도 유효한 모듈로 변환됨 (html등)
  - rules property는 test와 use를 필수로 가짐 (싱글 모듈에 대한 rules property)
  - test property는 변환해야하는 파일 등을 식별하는 역할
  - use property는 변환되어야하는 파일에 대하여 어떤 로더를 사용해야 하는지 설정
    - 오른쪽에서 왼쪽으로 실행됨

    ```JS
    const path = require('path');

    module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
        { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
    };

    module.exports : {
	rules: {
		test: '가지고올 파일 정규식',
		use: [
			{
				loader: '사용할 로더 이름', // html-loader
				options: { 사용할 로더 옵션 } // minimize: true
			}
		]
	}
    }

    // 리액트 예시 (babel, es6->es5 js convert)
    // html, css, js
        module.exports = {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname + "/build")
        },
        mode: "none",
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                {
                    loader: "html-loader",
                    options: { minimize: true }
                }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                // css-loader로 css파일 읽고 Mini~로 css파일 추출
            },
            // scss , sass-loader로 읽고 css변환 , css-loader로 다시 css읽고~~
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
            ]
    },
    ```

- `Plugins(플러그인)`

  - 플러그인은 번들된 결과물을 처리함 ( 로더는 파일단위 처리 )
  - 번들화된 JS를 난독화, 텍스트 추출 등의 용도로 사용

    ```JS
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack'); //to access built-in plugins

    module.exports = {
    module: {
        rules: [
        { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
    };
    ```

- `Mode(모드)`

  - 웹팩 셋팅에 있어 development( 빌드 속도 우위 ), production( 최적화 ), none 중 하나를 사용

    ```JS
    module.exports = {
    mode: 'production'
    };
    ```

- `Browser Compatibility(브라우저 호환성)`

#### Feature

  - `WEBPACK DEV SERVER`
  ```JS
    module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/build")
    },
    devServer: {
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 9000
    },
    mode: "none",
    module: {
        rules: []
    };
    }

    // Package.json
    "scripts": {
	"build": "webpack",
	"start": "webpack-dev-server --hot"
    }
  ```
  - `Directory cleaning`
  ```JS
  // style-test.css, ex) style.css가 build에서 삭제됨
    module.exports = {
        ...,
    plugins: [
        new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
        filename: 'style-test.css'
        }),
        new CleanWebpackPlugin()
    ]
    };
  ```
  - `Webpack build mode`
    ```JS
    "scripts": {
        "start": "webpack-dev-server --config ./config/webpack.config.dev --hot",
        "build": "webpack --config ./config/webpack.config.prod"
    },
    ```
    - config/webpack.config.dev.js
    ```JS
    const path = require("path");
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const CleanWebpackPlugin = require("clean-webpack-plugin");

    module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build")
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        index: "index.html",
        port: 9000
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ["babel-loader"]
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader",
                options: { minimize: true }
            }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html"
        }),
        new MiniCssExtractPlugin({
        filename: "style.css"
        }),
        new CleanWebpackPlugin()
    ]
    };
    ```
    - config/webpack.config.prod.js
    ```JS
    const path = require("path");
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const CleanWebpackPlugin = require("clean-webpack-plugin");

    module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "../build")
    },
    mode: "production",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ["babel-loader"]
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader",
                options: { minimize: true }
            }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html"
        }),
        new MiniCssExtractPlugin({
        filename: "style.css"
        }),
        new CleanWebpackPlugin()
    ]
    };
    ```


#### Reference

- [WEBPACK](https://webpack.kr/concepts/)
- [생활코딩](https://www.youtube.com/watch?v=cp_MeXO2fLg)
- [웹팩이란 무엇인가](https://medium.com/@woody_dev/js-webpack-1-%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-f29ebca31da4)
- [개발환경을 구축하면서 배우는 webpack 기초](https://velog.io/@jeff0720/React-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B0%EB%8A%94-Webpack-%EA%B8%B0%EC%B4%88)
