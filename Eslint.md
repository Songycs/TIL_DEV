# ESLINT
***

JS, JSX 정적 분석 도구(오픈소스프로젝트)
코드 분석으로 문법적오류나 안티패턴을 찾아 일관된 코드 스타일로 작성하게 도와줌
커스터마이징이 쉽고 확장성이 뛰어나 많이 쓰임

***

## `Concept`

## `Feature`

* Sharable Configs기능 제공 ( 커스텀된 Eslint 설정 설치,확장 가능 / 팀단위 개발 용이)

## `plugins & rules`

## `Example`
  ```JS
  {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "airbnb",
      "airbnb/hooks"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "prettier"
    ],
    "globals": {
      "JSX": true
    },
    "rules": {
      "react/react-in-jsx-scope": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/function-component-definition": 0,
      "no-use-before-define": "off",
      "linebreak-style":"off",
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
      "import/no-unresolved": "off",
      "import/no-absolute-path": "off",
      "react/self-closing-comp": "off",
      "react/jsx-props-no-spreading": "off",
      "object-curly-newline": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never",
          // "": "never"
        }
      ]
    }
  }
  ```


#### 스타일가이드

* [Airbnb Style Guide](https://github.com/airbnb/javascript)
* [Google Style Guide](https://github.com/google/eslint-config-google)

#### 레퍼런스
- [kakao tech](https://tech.kakao.com/2019/12/05/make-better-use-of-eslint/)

