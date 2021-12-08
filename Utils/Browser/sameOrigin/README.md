---
title: 关闭Chrome浏览器同源策略
date: 2021-12-05
tags:
 - Utils
categories:
 - 工具
---

### 关闭Chrome浏览器同源策略

1、在任意目录下新建 `chorme-debug.command` 文件

```shell
touch chorme-debug.command
```

2、在 `chorme-debug.command` 文件下写入脚本代码

```shell
\#! /bin/bash
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/userxxx/Documents/ChromeDevUserData
```

> 注意：userxxx为您的用户文件夹名称

3、在目录下运行以下命令修改执行权限

```shell
chmod 755 chorme-debug.command
```

4、双击脚本执行，开启关闭同源策略的Chrome浏览器！

