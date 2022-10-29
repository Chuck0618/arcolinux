## 启动网络服务
1. 用 http-server
写好网站的源代码后，如何启动服务呢？
```
npm install -g http-server
cd ~/project // 文件目录
http-server
```

2. 用 python + flask + 启动服务
   
Gunicorn是什么?
Gunicorn ‘Green Unicorn’ 是一个 UNIX 下的 WSGI HTTP 服务器，它是一个 移植自 Ruby 的 Unicorn 项目的 pre-fork worker 模型。它既支持 eventlet ， 也支持 greenlet. 在管理 worker 上，使用了 pre-fork 模型，即一个 master 进程管理多个 worker 进程，所有请求和响应均由 Worker 处理。Master 进程是一个简单的 loop, 监听 worker 不同进程信号并且作出响应。比如接受到 TTIN 提升 worker 数量，TTOU 降低运行 Worker 数量。如果 worker 挂了，发出 CHLD, 则重启失败的 worker, 同步的 Worker 一次处理一个请求。

```
gunicorn -w 3 -b 0.0.0.0:8080 app:app
```

3. authbind
解决防火墙问题 authbind


4. nginx

5. gulp-connect
gulp 是node.js 的自动代管理工具，gulp-connect是本地服务的管理软件。