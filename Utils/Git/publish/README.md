---
title: GitHub/GitLab 部署发布项目
date: 2021-12-05
tags:
 - Utils
categories:
 - 工具
---

## 一、GitHub部署项目

GitHub中找到要部署的项目，点击`"Settings"`

![0438e0711b9e8eaabc7437ccd384ee05](./images/68B262FF-2E27-484C-A1BC-17211E5DE148.png)

点击设置里的`"Pages"`, 选择分支为`"master分支"`，目录为`"/docs"`。并点击`"save"`保存。
最终便在上方会生成GitHub分配给你的该项目对应的部署地址。

![839ef255d28d6eecf7fe778d246bc853](./images/9A13629A-BCDB-4927-86D6-F281C7E1232F.png)


## 二、GitLab部署项目

编辑`".gitlab-ci.yml"`文件，选择模板为`"HTML"`

![217401480d2e31571b09020dfb756ea2](./images/09DF1A5B-539C-4788-95FE-837075313CEE.png)

点击`"Settings/Pages"`，会发现GitLab分配给你的该项目对应的部署地址。

![69fca816857b85061a93d1c8ae41cfc1](./images/D5E47EDE-9E49-474D-9727-88E56C0F65AA.png)

![4423566c1a86621a36d73641fe7d12a6](./images/F4245159-CFB7-4620-8B5B-FCB856A5087F.png)
