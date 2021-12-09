---
title: iTerm2 配置rz sz 上传下载文件
date: 2021-12-09
sidebar: 'auto'
tags:
 - m1
categories:
 - 环境配置
---
##### 一、前置条件：

安装好HomeBrew 和 iTerm2 ，HomeBrew 已经支持M1版本了，正常安装即可。

##### 二、提前准备文件：

1.用记事本新建文件命名为`iterm2-recv-zmodem.sh`，内容如下

```bash
#!/bin/bash
# Author: Matt Mastracci (matthew@mastracci.com)
# AppleScript from http://stackoverflow.com/questions/4309087/cancel-button-on-osascript-in-a-bash-script
# licensed under cc-wiki with attribution required 
# Remainder of script public domain

osascript -e 'tell application "iTerm2" to version' > /dev/null 2>&1 && NAME=iTerm2 || NAME=iTerm
if [[ $NAME = "iTerm" ]]; then
    FILE=`osascript -e 'tell application "iTerm" to activate' -e 'tell application "iTerm" to set thefile to choose folder with prompt "Choose a folder to place received files in"' -e "do shell script (\"echo \"&(quoted form of POSIX path of thefile as Unicode text)&\"\")"`
else
    FILE=`osascript -e 'tell application "iTerm2" to activate' -e 'tell application "iTerm2" to set thefile to choose folder with prompt "Choose a folder to place received files in"' -e "do shell script (\"echo \"&(quoted form of POSIX path of thefile as Unicode text)&\"\")"`
fi

if [[ $FILE = "" ]]; then
    echo Cancelled.
    # Send ZModem cancel
    echo -e \\x18\\x18\\x18\\x18\\x18
    sleep 1
    echo
    echo \# Cancelled transfer
else
    cd "$FILE"
    /usr/local/bin/rz -E -e -b
    sleep 1
    echo
    echo
    echo \# Sent \-\> $FILE
fi
```

2.用记事本新建文件命名为`iterm2-send-zmodem.sh`，内容如下

```bash
#!/bin/bash
# Author: Matt Mastracci (matthew@mastracci.com)
# AppleScript from http://stackoverflow.com/questions/4309087/cancel-button-on-osascript-in-a-bash-script
# licensed under cc-wiki with attribution required 
# Remainder of script public domain

osascript -e 'tell application "iTerm2" to version' > /dev/null 2>&1 && NAME=iTerm2 || NAME=iTerm
if [[ $NAME = "iTerm" ]]; then
    FILE=`osascript -e 'tell application "iTerm" to activate' -e 'tell application "iTerm" to set thefile to choose file with prompt "Choose a file to send"' -e "do shell script (\"echo \"&(quoted form of POSIX path of thefile as Unicode text)&\"\")"`
else
    FILE=`osascript -e 'tell application "iTerm2" to activate' -e 'tell application "iTerm2" to set thefile to choose file with prompt "Choose a file to send"' -e "do shell script (\"echo \"&(quoted form of POSIX path of thefile as Unicode text)&\"\")"`
fi
if [[ $FILE = "" ]]; then
    echo Cancelled.
    # Send ZModem cancel
    echo -e \\x18\\x18\\x18\\x18\\x18
    sleep 1
    echo
    echo \# Cancelled transfer
else
    /usr/local/bin/sz "$FILE" -e -b
    sleep 1
    echo
    echo \# Received $FILE
fi 
```

##### 三、开始配置

###### 第一步：安装lrzsz

打开iTerm2 ，输入 brew install lrzsz 安装 lrzsz

###### 第二步：放置文件

打开Finder后，按键`command + shift + g` 打开快速前往，输入`/usr/local/bin`进入该文件夹下。  
将刚才的两个文件放入该文件夹，需要输入密码输入登录密码即可。

###### 第三步：配置文件权限

打开iTerm2 ，输入 `cd /usr/local/bin` 进入该目录。再输入`chmod 777 iterm2-*` 调整文件权限为777。

###### 第四步：软连接执行文件（关键）

新版的brew路径和老版本不同，上面两个文件写死了路径，所以这里使用软连接将文件指向进行调整。  
在iTerm2 中输入以下指令：  
`sudo ln -s /opt/homebrew/bin/rz /usr/local/bin/rz`  
`sudo ln -s /opt/homebrew/bin/sz /usr/local/bin/sz`  
[参考文章](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Faikuyun%2Fiterm2-zmodem%2Fissues%2F16)

###### 第五步：打开iTerm2中Edit

点击iTerm2，选择 Preference... -> Profiles -> Default -> Advanced -> Edit （in Triggers），如图

![](//upload-images.jianshu.io/upload_images/2255503-d1d1c64144eedc21.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/924/format/webp)

Edit位置

###### 第六步：配置Edit中选项

![](//upload-images.jianshu.io/upload_images/2255503-1f5b7363afb8805c.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/940/format/webp)

添加Trigger

可以看到每一个触发器（Trigger）都有几个选项需要配置。这里我们添加上传和下载的触发器。  
其各个选项配置如下：

###### 1.下载触发器配置：

```bash
1. Regular expression 中填写
rz waiting to receive.\*\*B0100

2. Action 选择
Run Silent Coprocess...

3. Parameters 中填写
/usr/local/bin/iterm2-send-zmodem.sh

4. Instant 不勾选

5. Enabled 勾选
```

###### 2.上传触发器配置：

```bash
1. Regular expression 中填写
\*\*B00000000000000

2. Action 选择
Run Silent Coprocess...

3. Parameters 中填写
/usr/local/bin/iterm2-recv-zmodem.sh

4. Instant 不勾选

5. Enabled 勾选
```

配置完成如图：

  

![](//upload-images.jianshu.io/upload_images/2255503-7b0a2d317275030a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/941/format/webp)

配置完成

###### 第七步：使用

在使用登录服务器后，到相应的地方，输入rz ,会弹出一个文件选择器，选择后开始上传。

#### Tips:

###### 1.明明是上传，为什么是使用的receive指令？

上传是针对于本机使用者，而对于服务器这样的行为就是接收。同理，对于本机是下载则对于服务器是上传。通过配置下载触发器参数也可看出这点，下载触发器配置的是send-zmodem这个文件。

###### 2.名词解释：Regular expression

正则表达式

###### 3. rz 、sz 是什么意思？

rz 即 recv-zmodem，receive zmodem 接收协议（对服务器），对本机表现为上传。  
sz 即 send-zmodem，send zmodem 发送协议（对服务器），对本机表现为下载。  
zmodem 是一种传输协议（属于SecureCRT），该协议只能可靠地传输大小不超过4GB的文件。  
参考：  
[SecureCRT 上传下载](https://links.jianshu.com/go?to=https%3A%2F%2Fcloud.tencent.com%2Fdeveloper%2Fnews%2F161033)  
[wiki ZMODEM](https://links.jianshu.com/go?to=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FZMODEM)  
[wiki SecureCRT](https://links.jianshu.com/go?to=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FSecureCRT)
