module.exports = [
    {
        text: "首页",
        link: "/",
        icon: "reco-home"
    },
    {
        text: "技术汇总",
        icon: "reco-category",
        items: [ // 子标题
            {
                text: "入门及工具",
                items: [
                    {
                        text: "前端入门路线",
                        link: "/Routine/"
                    },
                    {
                        text: "必备工具介绍",
                        link: "/Utils/"
                    }
                ]
            },
            {
                text: "三大框架",
                items: [ // 子标题
                    { text: "React", link: "https://zh-hans.reactjs.org/"}, // 外部链接
                    { text: "Vue", link: 'https://cn.vuejs.org/' },
                    { text: "Angular", link: "https://angular.cn/" },
                    { text: "Vue3.0", link: "https://v3.vuejs.org/"}
                ]
            }
        ]
    },
    {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
    },
    {
        text: "GitHub",
        link: "https://github.com/jdhsgs",
        icon: "reco-github"
    }
    
]