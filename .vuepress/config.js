const nav = require("./nav");
const sidebar = require("./sidebar");

module.exports = {
    title: "yaoyin's Blog",
    description: "姚寅的个人小站",
    base: process.env.NODE_ENV === "production" ? "./" : "/",
    port: "8000",
    dest: "./dist",
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { rel: "stylesheet", type: "text/javascript", src: "/js/main.js" }]
    ],
    markdown: {
        lineNumbers: true
    },
    theme: "reco",
    themeConfig: {
        nav,
        sidebar: 'auto',
        logo: "/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "YAOYIN",
        authorAvatar: "/avatar.png",
        startYear: "2021",
        type: "blog",
        blogConfig: {
            "category": {
                "location": 2,
                "text": "分类"
            },
            tag: {
                location: 6,
                text: "标签"
            }
        },
        friendLink: [
            {
                title: "午后南杂",
                desc: "Enjoy when you can, and endure when you must.",
                email: "1156743527@qq.com",
                link: "https://www.recoluan.com"
            },
            {
                title: "vuepress-theme-reco",
                desc: "A simple and beautiful vuepress Blog & Doc theme.",
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: "https://vuepress-theme-reco.recoluan.com"
            },
            {
                title: "Lehi J.",
                desc: "宇宙无敌最帅程序员",
                link: "https://lehichiang.github.io/"
            },
            {
                title: "Ron",
                desc: "宇宙无敌前端开发工程师",
                link: "https://zhengquanhao.gitlab.io/vuepress-blog-dist"
            }
        ]
    },
    plugins: [
        [
            'meting',
            {
                // 这个 API 是不可用的，只是作为示例而已
                // metingApi: 'https://meting.example.com/api/',
                meting: {
                    auto: 'https://music.163.com/#/my/m/music/playlist?id=7107664757'
                }, // 不配置该项的话不会出现全局播放器
                aplayer: {
                    // 吸底模式
                    fixed: true,
                    mini: true,
                    // 自动播放
                    autoplay: true,
                    lrcType: 3,
                    order: 'random',
                },
                mobile: {
                    // 手机端去掉cover图
                    cover: false,
                }
            },
        ],
    ],
}