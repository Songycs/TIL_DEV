- 프로젝트 내 페이지 새로고침 시 404(PAGE NOT FOUND) 이슈
   -> (solved) rewrites property in your firebase.json file in the root of your app
```
"hosting": {
    "public": "build",
    "rewrites": [{
        "source":"**",
        "destination": "/index.html"
    }],
```    
