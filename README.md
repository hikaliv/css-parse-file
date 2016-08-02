CSS File Parser
===============

> **This is Sino document. If you need English version, please translate the content with help of ‘Google Translate’ by yourself. Have a fun with the ‘power’ of ‘Google Translate’.**

[css](https://www.npmjs.com/package/css) 只能处理字串，本工程用来处理文件。

安装
---
```sh
npm install --save css-parse-file
```

用法
---
```javascript
'use strict'

const parser = require('css-parse-file')

const promised = parser('yours.css')

promised.then(console.log)
```

接口
---

### parser(filename[, encoding])
参数：
+ filename，css 文件全文件名
+ encoding，可选参数，文件编码，默认为 utf8

返回值是 Promise 对像。