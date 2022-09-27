

### 安装
```
apt install npm
npm config set registry https://registry.npmmirror.com
npm install -g typescript
```

### 第一个程序，编写 app.ts
```
const hello : string = "Hello World!"
console.log(hello)
```
在控制台运行：
```
tsc app.ts // 生成 app.js
node app.js 
```

### Typescript 由以下组成：
- 模块
- 函数
- 变量
- 语句和表达式
- 注释

### Typescript 是面向对象的语言：
- 对象
- 类
- 方法
```
class Site { 
   name():void { 
      console.log("Runoob") 
   } 
} 
var obj = new Site(); 
obj.name();
```
这里 Site 是类，obj 是对象，name()是方法。


### 基础类型

- any：任意类型
- number；双精度数字
    ```
    let binaryLiteral: number = 0b1010; // 二进制
    let octalLiteral: number = 0o744; // 八进制
    let decLiteral: number = 6; //十进制
    let hexLiteral: number = 0xf00d; 十六进制
    ```
- string： 字符串
  ```
  let name: string = "Runoob";
  let year: number = 6;
  let words: string = `2+3+1 = ${name}`;
  ```
- 
 
  