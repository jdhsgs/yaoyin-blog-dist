---
title: 使用docker部署chrome无头浏览器并解决中文乱码，为pyppeteer提供运行环境
date: 2021-12-09
tags:
 - python
 - docker
categories:
 - 环境配置
---
## 一、解决中文乱码

如果没有安装中文字体，在截图时会出现中文不显示的问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210427113842913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RvbmdHZUdlMjE0,size_16,color_FFFFFF,t_70)
对于构建镜像之前
如果使用的是 windows，可以将中文字体(C:\Windows\Fonts\微软雅黑\msyh.ttc)拷贝到 Dockerfile 所在的目录，在构建镜像时就解决中文乱码问题
如果是按照本文指导操作，可将本文第二步的 Dockerfile 的第3行注释解开，即：
```
FROM python:3.8-slim
# 解决截图中文乱码 其他字体请自行修改字体文件名
COPY msyh.ttc /usr/share/fonts/ 
...

```
对于容器已存在时  
可以将字体拷贝到容器`/usr/share/fonts/`目录下，也能解决中文乱码
`$ docker cp msyh.ttc Container_name_or_ID:/usr/share/fonts/`
## 二、Dockfile
```
FROM python:3.8-slim
# 解决截图中文乱码 其他字体请自行修改字体文件名
# COPY msyh.ttc /usr/share/fonts/ 

# python:3.8-slim 是基于 Debian GNU/Linux 10 (buster) 制作的
# 使用 Debian 清华源
# https://mirrors.tuna.tsinghua.edu.cn/help/debian/
RUN mv /etc/apt/sources.list /etc/apt/sources.list_bak && \
    echo '# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释' >> /etc/apt/sources.list && \
    echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free' >> /etc/apt/sources.list && \
    echo '# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free' >> /etc/apt/sources.list && \
    echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free' >> /etc/apt/sources.list && \
    echo '# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free' >> /etc/apt/sources.list && \
    echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free' >> /etc/apt/sources.list && \
    echo '# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free' >> /etc/apt/sources.list && \
    echo 'deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free' >> /etc/apt/sources.list && \
    echo '# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free' >> /etc/apt/sources.list

# 使用 Debian 清华源加速下载
RUN apt-get update && apt-get -y install apt-transport-https ca-certificates libnss3 xvfb gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget && rm -rf /var/lib/apt/lists/*

# 使用淘宝镜像加速下载 chromium
ENV PYPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors
# 设置 chromium 版本，发布日期为: 2021-02-26T08:47:06.448Z
ENV PYPPETEER_CHROMIUM_REVISION=856583

# 使用 pypi 清华源加速下载
RUN pip install pyppeteer && pyppeteer-install -i https://pypi.tuna.tsinghua.edu.cn/simple

CMD python
```
## 三、构建并启动容器测试

1.  构建出镜像
`$ docker build -t py-chrome .` 
2. 准备代码文件  
demo.py
 ```
 import asyncio

import pyppeteer


async def main():
    browser = await pyppeteer.launch(
        options={
            'args': ['--no-sandbox']
        }
    )
    page = await browser.newPage();
    await page.setViewport({ 'width': 1920, 'height': 1080 });
    await page.goto('https://baidu.com', {
        'waitUntil': 'networkidle0' # 直到 http 连接为 0，即页面加载完成
    })
    await page.screenshot({
        'path': 'baidu.png',
        'fullPage': True  # 截取完整页面，否则只会截取屏幕可见大小
    })
    await browser.close()


asyncio.get_event_loop().run_until_complete(main())

```
3. 启动容器并测试
```$ # 如果是使用 Windows 的 cmd
$ # 将 $(pwd) 替换为 %cd% 参考 https://stackoverflow.com/a/41489151
$ ls # 检查当前文件夹有 demo.py，否则 $(pwd) 映射到容器后，代码文件不存在
Dockerfile  baidu.png  demo.py	msyh.ttc
$ docker run --name pychrome -v $(pwd):/workspace -itd py-chrome
$ docker exec -it pychrome bash # 此时会进入到容器的shell内，用户为root
# cd /workspace
# python demo.py
# ls # 此时看到 baidu.png 即为成功
Dockerfile  baidu.png  demo.py	msyh.ttc
```
4. 检查中文是否支持
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210427132435496.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0RvbmdHZUdlMjE0,size_16,color_FFFFFF,t_70)