---
title: 数组交集
date: 2021-12-06
tags:
 - algorithm
categories:
 - 算法
---
# 不重复的交集可以使用set
遍历s，生成一个set，遍历p，如果在set中，就加入set res，最后将res转为数组返回
# 可重复的交集可以使用map
首先遍历长度更长的数组s，用map存储每个字母出现的次数，然后遍历p， 如果对应的次数>0，则加入数组res中，
