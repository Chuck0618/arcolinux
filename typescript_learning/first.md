

### 安装
```bash
apt install npm
npm config set registry https://registry.npmmirror.com
npm install -g typescript
```

### 第一个程序，编写 app.ts
```bash
const hello : string = "Hello World!"
console.log(hello)
```
在控制台运行：
```bash
tsc app.ts // 生成 app.js
node app.js 
```

### 在 Html 中使用 Typescript 的办法
1. 使用 tsc 
2. 使用 
Just write your TS code between:
```html
<script type="text/typescript">
...
</script>
```
or include your TS file:
```html
    <script type="text/typescript" src="demo.ts"></script>
```
and add these two JS files **at the end of the HTML body**:
```html
    <script type="text/javascript" src="typescript.min.js"></script>
    <script type="text/javascript" src="typescript.compile.min.js"></script>
```

That's it! TypeScript will be compiled to JavaScript


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
```typescript
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
    ```typescript
    let binaryLiteral: number = 0b1010; // 二进制
    let octalLiteral: number = 0o744; // 八进制
    let decLiteral: number = 6; //十进制
    let hexLiteral: number = 0xf00d; 十六进制
    ```
- string： 字符串
  ```typescript
  let name: string = "Runoob";
  let year: number = 6;
  let words: string = `2+3+1 = ${name}`;
  ```
- boolean: 布尔
```typescript
let isDone: boolean = falas;
``` 
- 类型[]: 数组，例如  number[], string[] 

```typescript
let list: number[] = [1,2,3];
let list: Array<number> = [1,2,3];
```

- 元组
  ```typescript
  let x:[string , number];
  x= ['hello',10];
  ```
 

## 声明变量


  