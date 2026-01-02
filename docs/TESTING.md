# 测试配置文档

## 概览

本项目使用 **Vitest + React Testing Library** 作为单元测试和集成测试框架，使用 **Playwright** 进行 E2E 测试。

## 测试框架

### Vitest
- **版本**: ^4.0.16
- **优势**: 快速、现代、对 TypeScript 和 Monorepo 支持优秀
- **用途**: 单元测试、集成测试

### React Testing Library
- **版本**: ^16.3.1
- **用途**: React 组件测试、Hook 测试

### Playwright
- **版本**: ^1.51.0
- **用途**: E2E 测试

## 测试文件组织

### 就近放置原则

测试文件与被测试文件放在同一目录下，使用 `.test.ts(x)` 或 `.spec.ts(x)` 后缀：

```
apps/web/modules/marketing/
  ├── Hero.tsx
  ├── Hero.test.tsx          # 组件测试
  ├── useHero.ts
  └── useHero.test.ts        # Hook 测试

packages/utils/lib/
  ├── format.ts
  └── format.test.ts         # 工具函数测试
```

### E2E 测试分离

Playwright E2E 测试保持在独立的 `tests/` 目录：

```
apps/web/
  └── tests/
      ├── auth.spec.ts
      ├── dashboard.spec.ts
      └── payments.spec.ts
```

## 运行测试

### 全局命令（从根目录）

```bash
# 运行所有测试
pnpm test

# 运行测试 UI
pnpm test:ui

# 生成覆盖率报告
pnpm test:coverage
```

### 特定工作区

```bash
# 运行 web 应用测试
pnpm --filter web test

# 运行 utils 包测试
pnpm --filter @repo/utils test

# 运行 api 包测试
pnpm --filter @repo/api test
```

### 监听模式

```bash
# 在开发时持续运行测试
cd apps/web
pnpm test
```

## 配置文件

### 共享配置

位于 `tooling/vitest/`:
- `base.ts`: 基础配置（Node.js 项目）
- `react.ts`: React 项目配置
- `node.ts`: Node.js 项目配置

### 工作区配置

每个工作区都有自己的 `vitest.config.ts`:
- `apps/web/vitest.config.ts`: Web 应用配置
- `packages/utils/vitest.config.ts`: Utils 包配置
- `packages/api/vitest.config.ts`: API 包配置
- `packages/auth/vitest.config.ts`: Auth 包配置

## 测试覆盖率

### 覆盖率阈值

所有项目统一设置为：
- **Lines**: 60%
- **Functions**: 60%
- **Branches**: 60%
- **Statements**: 60%

### 查看覆盖率报告

```bash
pnpm test:coverage
```

覆盖率报告生成位置：
- HTML 报告: `coverage/index.html`
- LCOV 报告: `coverage/lcov.info`
- JSON 报告: `coverage/coverage-final.json`

### 排除文件

以下文件自动从覆盖率统计中排除：
- `node_modules/**`
- `dist/**`, `.next/**`
- `**/*.d.ts`
- `**/*.config.{js,ts,mjs,cjs}`
- `**/*.test.{js,ts,jsx,tsx}`
- `**/*.spec.{js,ts,jsx,tsx}`
- `coverage/**`
- `tests/**` (E2E 测试目录)

## 构建排除

### Next.js 自动排除

Next.js 默认会忽略测试文件，无需额外配置。

### TypeScript 配置

各个 `tsconfig.json` 中已配置排除测试文件：

```json
{
  "exclude": [
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.ts",
    "**/*.spec.tsx"
  ]
}
```

### Turbo 配置

在 `turbo.json` 中配置了测试任务：

```json
{
  "tasks": {
    "test": {
      "dependsOn": ["^generate"],
      "outputs": ["coverage/**"]
    },
    "test:coverage": {
      "dependsOn": ["^generate"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## CI/CD 集成

### GitHub Actions

在 `.github/workflows/validate-prs.yml` 中集成了单元测试：

```yaml
unit-tests:
  name: Run unit tests
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - uses: pnpm/action-setup@v4
    - name: Install dependencies
      run: pnpm install
    - name: Run tests with coverage
      run: pnpm test:coverage
    - name: Upload coverage reports
      uses: codecov/codecov-action@v4
```

### Codecov 集成

需要在 GitHub Secrets 中配置 `CODECOV_TOKEN`。

## 示例测试

### 工具函数测试

参考 `packages/utils/lib/example.test.ts`

### React 组件测试

参考 `apps/web/modules/example/Counter.test.tsx`

### Hook 测试

参考 `apps/web/modules/example/useExample.test.ts`

## 最佳实践

### 1. 测试命名

```typescript
describe('功能模块名', () => {
  it('应该做某事', () => {
    // 测试内容
  });
});
```

### 2. 使用 data-testid

```tsx
<button data-testid="submit-button">Submit</button>
```

```typescript
screen.getByTestId('submit-button');
```

### 3. 清理副作用

```typescript
afterEach(() => {
  cleanup();
});
```

### 4. 使用 Fake Timers

```typescript
vi.useFakeTimers();
// 测试代码
vi.useRealTimers();
```

### 5. Mock 外部依赖

```typescript
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));
```

## 常用命令速查

| 命令 | 说明 |
|------|------|
| `pnpm test` | 运行所有测试 |
| `pnpm test:ui` | 启动测试 UI |
| `pnpm test:coverage` | 生成覆盖率报告 |
| `pnpm --filter web test` | 运行特定包的测试 |
| `pnpm --filter web e2e` | 运行 E2E 测试 |

## 故障排查

### 测试找不到模块

确保在 `vitest.config.ts` 中配置了正确的 alias：

```typescript
resolve: {
  alias: {
    '@': resolve(__dirname, './'),
  },
}
```

### 测试超时

增加超时时间：

```typescript
it('long running test', async () => {
  // 测试代码
}, { timeout: 10000 }); // 10 秒
```

### Next.js 相关错误

确保 `vitest.setup.ts` 中正确 mock 了 Next.js 模块。

## 资源链接

- [Vitest 文档](https://vitest.dev/)
- [React Testing Library 文档](https://testing-library.com/react)
- [Playwright 文档](https://playwright.dev/)
