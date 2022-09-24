## 文件系统


这部分内容放在系统内部模块 Base.Filesystem 里。

1. 读取当前文件夹
```
readdir()
```
2. 跳转文件位置
```
cd("/home")
cd()    // =cd(homedir())
homedir()  //读取主文件夹位置
```

3. 