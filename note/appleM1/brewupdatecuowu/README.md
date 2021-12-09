---
title: brew update 报错 "fatal Could not resolve HEAD to a revision"
date: 2021-12-09
sidebar: 'auto'
tags:
 - m1
categories:
 - 环境配置
---
### 报错

执行brew update命令时：

```csharp
% brew update
error: Not a valid ref: refs/remotes/origin/master
fatal: Could not resolve HEAD to a revision
Already up-to-date.
```

### 解决

`% brew update --verbose`

```csharp
% brew update -verbose
Checking if we need to fetch /opt/homebrew...
Checking if we need to fetch /opt/homebrew/Library/Taps/homebrew/homebrew-cask...
Fetching /opt/homebrew...
Checking if we need to fetch /opt/homebrew/Library/Taps/homebrew/homebrew-core...
Fetching /opt/homebrew/Library/Taps/homebrew/homebrew-core...
Fetching /opt/homebrew/Library/Taps/homebrew/homebrew-cask...
fatal: unable to access 'https://github.com/Homebrew/homebrew-cask/': Failed to connect to github.com port 443: Operation timed out
Error: Fetching /opt/homebrew/Library/Taps/homebrew/homebrew-cask failed!
Updating /opt/homebrew...
Branch 'master' set up to track remote branch 'master' from 'origin'.
Switched to and reset branch 'master'
Your branch is up to date with 'origin/master'.
Switched to and reset branch 'stable'
Current branch stable is up to date.

Updating /opt/homebrew/Library/Taps/homebrew/homebrew-core...
fatal: Could not resolve HEAD to a revision
```

打开报错路径：  
`% cd /opt/homebrew/Library/Taps/homebrew/homebrew-core`  
`% ls -al`

```css
total 0
drwxr-xr-x   3 tyrone.lin@ui.com  admin   96  4 13 16:34 .
drwxr-xr-x   4 tyrone.lin@ui.com  admin  128  4 14 11:31 ..
drwxr-xr-x  12 tyrone.lin@ui.com  admin  384  4 14 11:44 .git
```

执行:  
`% git fetch --prune origin`  
`% git pull --rebase origin master`

```rust
From https://mirrors.ustc.edu.cn/homebrew-core
 * branch                  master     -> FETCH_HEAD
```

成功后执行`% brew update`

```undefined
Already up-to-date.
```

之后便可正常执行其他命令了  
eg. `% brew install rbenv ruby-build`