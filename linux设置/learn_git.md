
### github 的软件思路
`git`本质上是一个仓库管理软件，分本地和远程服务。所有的操作原理都是先在本地完成文件的`提交`，最终`上传`到服务器。
### git历史结构
`git`历史结构是一个拓扑图，记录了每次提交的信息，可以用 `git log`查看
```
git log
git log --graph // 以线状图查看
git log -3 //最近3 条提交
```
`git` 由多条分支，每条分支有相应的指针，一般原始的分支名是 `master`.
而 HEAD 指向当前工作的分支。

### 本地操作
创建和转向分支
```
git brange newbrange // 创建分支
git checkout newbrange //转向 newbrange  
git checkout -b newbrange //创建且转向 newbrange 分支
```
### 分支合并
主要有两种方式
1. git merge
   
2. git rebase  
如果遇到冲突，需要手动修改文本解决冲突。
之后可以用 `git rebase --continue` 继续，或者用 `git rebase --abort` 中止。


### 服务器同步
1. 文件拉取
```
git fetch //拉回服务器的git历史
git pull // == git fetch && git merge
git pull --rebase // == git fetch && git rebase
```
2. 文件上传
```
git push
```