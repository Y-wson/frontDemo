webpack 被编译成了什么样子

- 将 import 这种浏览器不认识的关键字替换成了**webpack_require**函数调用。
- **webpack_require**在实现时采用了类似 CommonJS 的模块思想。
- 一个文件就是一个模块，对应模块缓存上的一个对象。
- 当模块代码执行时，会将 export 的内容添加到这个模块对象上。
- 当再次引用一个以前引用过的模块时，会直接从缓存上读取模块。
