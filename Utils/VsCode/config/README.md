---
title: Setting.json文件配置
date: 2021-12-05
tags:
 - Utils
categories:
 - 工具
---

```json
{
    "files.associations": {
        "*.cjson": "jsonc",
        "*.wxss": "css",
        "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
        "wxml": "html",
        "javascript":"javascriptreact"
    },
    "minapp-vscode.disableAutoConfig": true,
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "editor.fontSize": 13,
    "editor.detectIndentation": false,
    "editor.tabSize": 4,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        { "language": "vue", "autoFix": true }
    ],
    "eslint.options": {
        "extensions": [".js",".vue"]
    },
    "window.zoomLevel": 1,
    "editor.quickSuggestions": {
        "strings": true
    },
    "terminal.integrated.fontSize": 14,
    "workbench.iconTheme": "vs-seti",
    "breadcrumbs.enabled": false,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "workbench.startupEditor": "none",
    "search.followSymlinks": false,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "python.autoComplete.addBrackets": true,
    "gitlens.advanced.messages": {
        "suppressGitDisabledWarning": true
    },
    "todo-tree.regex.regex": "((%|#|//|<!--|^\\s*\\*)\\s*($TAGS)|^\\s*- \\[ \\])",
    "todo-tree.general.tags": [" TODO "," FIXME "," BUG ", " URGENT "],
    "todo-tree.highlights.defaultHighlight": {
        // "icon": "alert",
        "type": "text",
        "foreground": "white",
        "background": "rgb(235, 174, 52)",
        "opacity": 50,
        "iconColour": "rgb(235, 174, 52)"
    },
    "todo-tree.highlights.customHighlight": {
        "TODO": {
            "foreground": "white",
            "type": "text"
        },
        "URGENT": {
            "icon": "beaker",
            "foreground": "white",
            "iconColour": "rgb(3, 252, 186)",
            "background": "rgb(3, 252, 186)",
        }
    },
    "explorer.confirmDelete": false,
    "update.mode": "none",
    "terminal.integrated.shell.osx": "/bin/zsh",
    "cSpell.userWords": [
        "Npwp"
    ],
    "bookmarks.saveBookmarksInProject": true,
    "sync.gist": "541d804dc5d1313c5d79ffb624936d57",
    "workbench.colorTheme": "Material Theme Darker"
}
```