# Everybody UI

Everybody UI 是一个基于 **Vite + Vue 生态**构建的组件库与文档项目。

## 项目docs地址

[Everybody UI](https://yuiyideyui.github.io/everybody-ui/)

## Monorepo 结构

本仓库当前包含两个 workspace：

- `packages/everybody-ui/`：组件库包（`@yuiyideyui/everybody-ui`）
- `apps/docs/`：文档站点包（`everybody-ui-docs`）

## 目录结构

```text
.
├── apps/docs/                # 文档站点 workspace
│   └── package.json
├── packages/everybody-ui/            # 组件库 workspace
│   └── package.json
├── package.json         # monorepo 根配置（workspaces + 统一脚本）
├── vite.config.ts       # 组件库构建配置
├── turbo.json           # Turbo 构建配置
└── tsconfig.json        # TypeScript 配置
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 构建packages与apps

```bash
pnpm turbo build check-types
pnpm turbo check-types build
```

### 3. 启动文档开发环境

```bash
pnpm turbo dev
```
