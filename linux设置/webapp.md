
### 网络部署

gunicorn -w 3 -b 0.0.0.0:8080 app:app


### 如果使用80端口
authbind  gunicorn -w 3 -b 0.0.0.0:80 app:app
