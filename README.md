# Everybody UI

Everybody UI 是一个基于 **Vite + Vue 生态**构建的组件库与文档项目，目标是提供统一、可扩展、易维护的前端 UI 基础能力。

## 项目docs地址

[Everybody UI](https://yuiyideyui.github.io/everybody-ui/)

## 项目简介

本项目当前包含：

- 组件库源码入口（`packages/`）
- 基于 VitePress 的文档站点（`docs/`）
- TypeScript 与构建相关配置（`tsconfig.json`、`vite.config.ts` 等）

你可以将它作为：

1. 企业内部组件库的起步模板
2. 中后台项目的 UI 能力沉淀仓库
3. 个人/团队设计系统的文档化基础设施

## 技术栈

- **VitePress**：用于文档站点构建
- **Vite**：构建与开发支持
- **TypeScript**：类型定义与工程可维护性
- **Element Plus**：基础组件依赖
- **Less / PostCSS**：样式扩展与处理

## 目录结构

```text
.
├── docs/                # 文档站点
├── packages/            # 组件库代码与类型入口
├── package.json         # npm scripts 与依赖
├── vite.config.ts       # Vite 构建配置
└── tsconfig.json        # TypeScript 配置
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动文档开发环境

```bash
npm run docs:dev
```

### 3. 构建文档

```bash
npm run docs:build
```

### 4. 本地预览文档构建结果

```bash
npm run docs:preview
```

## 后续建议

- 增加组件示例页与 API 文档规范
- 建立版本发布流程（如 Changesets）
- 接入自动化测试与代码规范检查
- 完善主题与设计 Token 体系

---

