## create user


## gpg key

```bash
> sudo pacman-key --init
> sudo pacman-key --populate archlinux
> sudo pacman -S archlinux-keyring
```
## archlinuxcn 库

```bash
> sudo nano /etc/pacman.conf
## 最后添加
SigLevel = Optional TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
> sudo pacman -S archlinuxcn-keyring
> sudo pacman -Syy
> sudo pacman -Syyu
```

##      炫技
- neofetch
- screenfetch
- cmatrix
- toilet

## zsh

```bash
pacman -S zsh
pacman -S oh-my-zsh
chsh -s /bin/zsh
```

## 用户管理

```bash
useradd hcq
passwd
cat /etc/passwd
cat /etc/groups
```



## SSH 服务

先给服务器设立别名：

```bash
Host arco
Hostname 192.168.0.7
Port 22
User huchq

Host ali
Hostname 47.93.42.244
Port 22
User ali
```

