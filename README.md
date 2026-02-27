# Everybody UI

Everybody UI 是一个基于 **Vite + Vue 生态**构建的组件库与文档项目，现已调整为 **Monorepo + pnpm Workspace** 结构，方便组件库与文档分包管理。

## 项目docs地址

[Everybody UI](https://yuiyideyui.github.io/everybody-ui/)

## Monorepo 结构

本仓库当前包含两个 workspace：

- `packages/`：组件库包（`everybody-ui`）
- `docs/`：文档站点包（`everybody-ui-docs`）

## 目录结构

```text
.
├── docs/                # 文档站点 workspace
│   └── package.json
├── packages/            # 组件库 workspace
│   └── package.json
├── package.json         # monorepo 根配置（统一脚本）
├── pnpm-workspace.yaml  # pnpm workspace 定义
├── vite.config.ts       # 组件库构建配置
└── tsconfig.json        # TypeScript 配置
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动文档开发环境

```bash
pnpm docs:dev
```

### 3. 构建文档

```bash
pnpm docs:build
```

### 4. 构建组件库

```bash
pnpm build
```

## 常用 Workspace 命令

```bash
# 仅构建组件库 workspace
pnpm --filter everybody-ui build

# 仅启动文档 workspace
pnpm --filter everybody-ui-docs dev
```
