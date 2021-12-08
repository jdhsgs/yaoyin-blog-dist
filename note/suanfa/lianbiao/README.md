---
title: 创建链表
date: 2021-12-06
tags:
 - algorithm
categories:
 - 算法
---
# 创建链表
`class Node{
    int val;
    Node next;
    Node(){
    }
    Node(int val){
    this.val = val;
    }
    Node(int val, Node next){
    this.val = val;
    this.next = next;
    }
}`
# 初始化链表
`public class MyLinkedList{
    Node head = new Node();
    int size;
    MyLinkedList(){
    初始化参数
    }
}`
# 注意点
1.查找插入删除的位置都需要判断
# 反转链表
## 方法一双指针法
定义三个指针，pre = null，cur = head； temp 存储cur的下一个位置
每次都把cur指向pre，pre = cur， cur = temp；
## 方法二递归法
递归终止的条件是cur==null
每次操作一条边
    
