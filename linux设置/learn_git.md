
### github 的软件思路
github 本质上是一个仓库管理软件，分本地和远程服务。所有的操作原理都是先在本地完成文件的`提交`，最终`上传`到服务器。
### git文件结构
`git`文件结构是一个拓扑图，可以用 `git log`查看
```
git log
git log --graph // 以线状图查看
git log -3 //最近3 条提交
```
`git` 由多条分支组，每条分支有相应的指针，一般原始的分支名是 `master`.
而 HEAD 指向当前工作的分支。

### 本地操作

```
git checkout name
```



### 服务器同步
1. 文件拉取
```
git pull
// = git fetch && git merge
```
2. 文件上传
```
git push
```