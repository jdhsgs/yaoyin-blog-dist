module.exports = {
    "/Utils/": [
        {
            title: "Chrome浏览器",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "Chrome插件推荐",
                    path: "/Utils/Browser/extension/"
                },
                {
                    title: "Chrome快捷键",
                    path: "/Utils/Browser/hotKey/"
                },
                {
                    title: "如何导出Chrome插件",
                    path: "/Utils/Browser/downExtension/"
                },
                {
                    title: "关闭Chrome同源策略",
                    path: "/Utils/Browser/sameOrigin/"
                }
            ]
        },
        {
            title: "VsCode编译器",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "VsCode插件推荐",
                    path: "/Utils/VsCode/extension/"
                },
                {
                    title: "VsCode快捷键",
                    path: "/Utils/VsCode/hotKey/"
                },
                {
                    title: "VsCode中的一些实用操作",
                    path: "/Utils/VsCode/operation/"
                },
                {
                    title: "Setting.json文件配置",
                    path: "/Utils/VsCode/config/"
                }
            ]
        },
        {
            title: "Git",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "GitHub/GitLab 部署发布项目",
                    path: "/Utils/Git/publish/"
                }
            ]
        }
    ],
    // TODO 待删除
    "/JS/": [
        {
            title: "简介",
            path: "/JS/01_Introduction/",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "JavaScript 简介",
                    path: "/JS/01_Introduction/01_IntroductionToJavaScript/"
                },
                {
                    title: "代码编辑器",
                    path: "/JS/01_Introduction/02_CodeEditor/"
                },
                {
                    title: "开发者控制台",
                    path: "/JS/01_Introduction/03_DeveloperConsole/"
                }
            ]
        },
        {
            title: "JavaScript 基础知识",
            path: "/JS/02_BasicKnowledge/",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "Hello, World!",
                    path: "/JS/02_BasicKnowledge/01_HelloWorld/"
                },
                {
                    title: "代码结构",
                    path: "/JS/02_BasicKnowledge/02_CodeStructure/"
                }
            ]
        },
        {
            title: "代码质量",
            path: "/JS/03_CodeQuality/",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                {
                    title: "在 Chrome 中调试",
                    path: "/JS/03_CodeQuality/01_Debugging/"
                }
            ]
        }
    ]
}