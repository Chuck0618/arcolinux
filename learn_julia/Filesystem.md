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

3. 文件属性
```
stat(file)
```

4. 所属者的权限，非所属者的权限
```
uperm(file)
operm(file)
```


5. 复制文件，从A到B
```
cp(A,B)
```