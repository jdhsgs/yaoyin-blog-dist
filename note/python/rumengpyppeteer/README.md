---
title: 基于浏览器的python爬虫神器pyppeteer介绍及入门
date: 2021-12-09
tags:
 - python
categories:
 - python学习
---
### 简介
在讲 python 的 pyppeteer 前，先来说下 Node 的 puppeteer 库：

puppeteer的中文意思是：操纵木偶的人，木偶师。

那么 Node 的 puppeteer 是什么呢？

>Puppeteer 是一个 Node 库，它提供了高级的 API 来控制 Chrome/Chromium，通过 DevTools 协议。Puppeteer默认使用无头浏览器，但是通过配置可以控制完整的 Chrome/Chromium 浏览器。
英文原文地址：https://github.com/puppeteer/puppeteer#puppeteer

通过介绍，再看 puppeteer 的图标，一个被操纵的浏览器，就会觉得很形象、直观有木有。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210323135055922.png)
Puppeteer 库是由 Chrome DevTools 团队维护的。

说完了 Node 的 puppeteer 再回过来看 pyppeteer

>pyppeteer 是 puppeteer 的非官方 python 版

了解 js 的同学知道，python 和 js 在很多方面挺像的，所以 pyppeteer 也力求尽可能的和 puppeteer 一致，但由于底层的不同，它们还是有些差异的，更多信息可以查看相关的官网。

### 官网信息
**pyppeteer**
- github 地址：https://github.com/pyppeteer/pyppeteer
- 文档：https://pyppeteer.github.io/pyppeteer/reference.html
**puppeteer**
- github 地址：https://github.com/puppeteer/puppeteer
- 中文文档：https://zhaoqize.github.io/puppeteer-api-zh_CN/#/
- 英文文档：https://pptr.dev/
### 使用
**安装**
`pip install pyppeteer # Python >= 3.6`
**配置**
pyppeteer 在初次运行的时候，会自动下载 chromium（版本为 588429，发布时间为 2018-09-04T09:08:12.712Z）。
如果从国内的网直接下载，速度会很慢或无法下载，而且默认版本也比较老，因此，可以配置操作系统的环境变量，从国内的 taobao 镜像下载较新的 chromium。

淘宝镜像地址：
https://npm.taobao.org/mirrors/chromium-browser-snapshots

在`~/.bashrc`文件内添加环境变量配置（此处直接通过 shell 命令将配置追加到文件底部）：
```
$ echo "export PYPPETEER_DOWNLOAD_HOST='https://npm.taobao.org/mirrors'">>~/.bashrc
$ echo "export PYPPETEER_CHROMIUM_REVISION='856583'">>~/.bashrc # 此示例版本为当前最新版，发布日期为：2021-02-26T08:47:06.448Z 
$ source ~/.bashrc # 使新环境变量生效
```
### 常见示例

#### 1. 打开浏览器，打开页面，关闭浏览器

demo.py
```
import asyncio

import pyppeteer


async def main():
	executablePath = pyppeteer.executablePath()
	print('自动下载的 chromium 的存储位置为：', executablePath)
	
    browser = await pyppeteer.launch(
    	headless=True,  # 如果为False, 则会打开浏览器界面，适合在有界面的机器上观察浏览器行为
    	executablePath=executablePath,  # 也可以指定为机器上的已安装的 Chrome 浏览器： r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
        args=[
            '--no-sandbox'
            #, '--proxy-server=socks5://192.168.237.1:10808'
        ]
    )
    
    page = await browser.newPage()
    await page.setViewport({'width': 1920, 'height': 1080})  # 调整页面的尺寸为 1920*1080
    await page.setJavaScriptEnabled(enabled=True)  # 允许 javascript 执行
    await page.goto(
    	'https://baidu.com', 
    	waitUntil='networkidle0'  # 直到未结束的网络连接数为 0，停止等待。（可以用来等待 ajax 结束）
    )
    html = await page.content()
    
   	# 3s 后关闭浏览器
   	await asyncio.sleep(3)
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())

```
#### 2. 截取完整网页
```
await page.screenshot({ 'path': 'baidu.png', 'fullPage': True # 截取完整页面，否则只会截取屏幕可见大小 })
```
#### 3. 将网页保存为 mhtml 文件

mhtml 格式能将网页所有内容都存储到单个文件中
```
cdp = await page.target.createCDPSession()
result: dict = await cdp.send('Page.captureSnapshot', {'format': 'mhtml'})
with open('page.mhtml', 'w') as w:
	w.write(result['data'].replace('\r\n', '\n'))  # 解决 windows 多次换行问题
```