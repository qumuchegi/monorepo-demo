monorepo 实践

## 工具链
作为轻量化的 monorepo 实践，所需要的是：pnpm workspace + swc(编译 ts、react) + webpack(构建、打包)

目录结构：
```yaml
.
├── README.md
├── apps
│   └── www
│       ├── package.json
│       ├── public
│       │   └── index.html
│       ├── src
│       │   ├── index.scss
│       │   └── index.tsx
│       └── webpack.config.js
├── package.json
├── packages
│   ├── components
│   │   ├── Button
│   │   │   └── index.tsx
│   │   ├── index.tsx
│   │   └── package.json
│   ├── eslint-config-custome
│   │   ├── index.js
│   │   └── package.json
│   └── prettier-custome
│       ├── index.js
│       └── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

文件 pnpm-workspace.yaml 定义了 pnpm workspace 也就是包：

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

包 www 依赖 包 components 和包 eslint-config-custome、prettier-custome，www 通过 pnpm “软连接” 的方式 “安装” 其他的包。


## 其他

开发：

- [x] 代码检查和格式化：prettier + eslint

优化:

- [ ] 提高开发构建速度 (引入重量级 turborepo)

部署:

- [ ] 编写部署脚本

- [ ] github webhook 启动脚本开启生产环境工作六: lint
      、测试、构建和部署

- [ ] monorepo 内包的发布
