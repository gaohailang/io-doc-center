
### About:
live api documentation described by json config(about domain, about resource|endpoint) etc which is based on open-source i/o documentation, plus a add-on for google documentation which aids wdj's developer to create, parse, linter, push api json from doc to server

### TODO
1. 导出一份现有的doc api 到 json中，看看痛点
2. 看下的约束doc格式 googlescript等toolset怎么搞
3. 看下doc 怎么sync 到 这里的json配置中（初步：googlescript post processed json to here）
4. 看下怎么定制化 view 层，来个豌豆主题
5. 引入打分机制，看看哪些api 常用并且好用！

### GS-Helper
当前的示例Doc [io-doc-center: API helper demo](https://docs.google.com/a/wandoujia.com/document/d/1lqhX-KvNBz0MX0azRIp4KR6YV4h-TWwPSQto41X0Tso/edit# "io-doc-center: API helper demo") io-doc-center: API helper demo.

### Note:
1. include i/o docs move to server
2. mkdir helper-gs, folder for googlescript used in google docs
3. use markdonw in jade:
`:markdown must have markdown-js installed or node-discount`
4. do some custom for view jade etc

### Screencast
![gs-helper-v1](./material/gs-helper-v1.png "gs-helper-v1")