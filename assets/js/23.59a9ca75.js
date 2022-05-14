(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{556:function(t,e,r){"use strict";r.r(e);var s=r(12),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[t._v("在一排树中，第 i 棵树产生 tree[i] 型的水果。\n你可以从你选择的任何树开始，然后重复执行以下步骤：")]),t._v(" "),r("p",[t._v("把这棵树上的水果放进你的篮子里。如果你做不到，就停下来。\n移动到当前树右侧的下一棵树。如果右边没有树，就停下来。")]),t._v(" "),r("p",[t._v("请注意，在选择一颗树后，你没有任何选择：你必须执行步骤 1，然后执行步骤 2，然后返回步骤 1，然后执行步骤 2，依此类推，直至停止。")]),t._v(" "),r("p",[t._v("你有两个篮子，每个篮子可以携带任何数量的水果，但你希望每个篮子只携带一种类型的水果。")]),t._v(" "),r("p",[t._v("用这个程序你能收集的水果树的最大总量是多少？")]),t._v(" "),r("h2",{attrs:{id:"解答思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解答思路"}},[t._v("#")]),t._v(" 解答思路")]),t._v(" "),r("p",[t._v("首先定义三个指针：\nfirst记录第一个篮子的起始地址\nsecond记录第二个篮子的起始位置\ntemp记录未来的两个篮子的起始的索引地址")]),t._v(" "),r("h3",{attrs:{id:"记录first"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#记录first"}},[t._v("#")]),t._v(" 记录first")]),t._v(" "),r("p",[t._v("遍历tree记录第一个出现的篮子的索引，\n当出现第三种篮子时即：tree[i]!=tree[first]&&tree[i]!=tree[second]更新为temp\nfirst = temp，保证计算len时同时出现的只有两个篮子")]),t._v(" "),r("h3",{attrs:{id:"记录second"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#记录second"}},[t._v("#")]),t._v(" 记录second")]),t._v(" "),r("p",[t._v("遍历tree记录第二个篮子的索引\n当遍历到第三个篮子时即：tree[i]!=tree[first]&&tree[i]!=tree[second]，更新为i，\nsecond = i，保证计算len的时候同时出现的只有两个篮子")]),t._v(" "),r("h3",{attrs:{id:"计算temp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算temp"}},[t._v("#")]),t._v(" 计算temp")]),t._v(" "),r("p",[t._v("规律：\n当下篮子中最后出现的篮子从后往前连续相等最长的索引，即未来的两个篮子中的第一个篮子的起始索引")])])}),[],!1,null,null,null);e.default=a.exports}}]);