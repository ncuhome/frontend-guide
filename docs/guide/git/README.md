---
sidebarDepth: 2
---

# GIT 使用规范

规范制订背景:

* 家园项目日渐增多，每个项目使用的 Git 开发方式都不一样，给跨项目合作与维护带来了一定程度上的困扰。
* 统一 Git Flow，提高开发效率，向正式互联网公司的开发模式看齐。
* 统一且规范的 Commits 信息还有助于配合相关工具自动生成 Changelogs。

## **分支**

### `main`分支（原 master 分支）

* 代码主分支
* 不允许直接推送代码到 main 分支，所有新功能与 BUG 修复均从 main 分支 checkout 新分支，完成后提 PR 并合入
* 确保 main 分支质量，不允许出现 main 分支无法部署的低级问题

### `feature` 分支

* 用于开发新功能，完成后合并回 main 分支
* 命名以 `feature/[新功能名字]` 为准，不使用任何无意义的单词
    > 示例：feature/login feature/topic-editor

* 一个分支只完成一个功能
* 合并前确保能正常编译或者部署

### BUG 修复分支

* 用于修复产品 bug，完成后合并回 main 分支
* 命名以  `fix/[bug名称]` 为准，不使用任何无意义的单词
    > 示例：fix/topic-editor fix/login-502

* 一个分支可修复多个BUG
* 合并前确保能正常编译或者部署

## `commit` 信息
完整的 commit 信息包含头部信息及提交信息，其中头部信息为必填，在必要时（有较大的变动或其它需要备注的信息）选填提交信息。
头部信息需要包含两个部分``<type>: <description>``

* `type` 可以选用 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
  * feat: 新功能(feature)
  * fix: 修复Bug
  * docs: 文档
  * style: 格式化代码(在不影响代码功能的前提)
  * refactor: 重构代码
  * test: 添加测试用例
  * chore: 构建过程或者辅助工具变动
* `description` 可以是任何文字，但不能包含空格

## 文档

* 项目文档统一放置于 docs 文件夹
* 后端部分，需要包含部署、API 等文档
* 前端部分需要包含编译构建流程文档

## Tag 版本标签

* 适用与当前项目*按明确版本对外发布*的，如 App
* 发布正式版本时，需打上 Tag 版本号，并推送到远端

## 其它事项

* 项目中必须有 `.gitigore`，并屏蔽编辑器自定义配置/编译文件/依赖文件等
* **不允许**提交无意义的 commit message，如 aaa，bbb 等信息
* 勤 commit，修复一个 bug，完成部分新功能即 commit 一次，**不要一次提交包含多个功能或者十几个改动等**

## 如何落实

* 规范 Commit 信息，推荐使用 [commitlint](https://github.com/conventional-changelog/commitlint) 工具，配合工作室定制的规则。
* 使用自动化 Release 工具，简化打 Tag、生成 Release 与 Changelogs 的流程。一般情况下可以使用 [release-it](https://github.com/release-it/release-it)，monorepo 场景下可以使用 [changesets](https://github.com/atlassian/changesets)，配合工作室定制的规则使用。
* 在提交 commit 之前，需要确保工作室已经完成了相关的工作，如果没有完成，需要先完成。
