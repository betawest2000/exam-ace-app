# 兑换码系统使用指南

## 功能概览

系统已创建完整的兑换码页面和组件，用户可以通过输入兑换码来激活会员资格。

## 已创建的文件

### 1. 兑换页面
- **文件**: `apps/web/app/(saas)/redeem-code/page.tsx`
- **路径**: `/redeem-code`
- **功能**: 显示兑换码输入表单，需要用户登录

### 2. 兑换表单组件
- **文件**: `apps/web/modules/saas/payments/components/RedeemCodeForm.tsx`
- **功能**:
  - 自动格式化兑换码（XXXX-XXXX-XXXX）
  - 验证兑换码功能
  - 兑换码兑换功能
  - 实时错误提示

### 3. Provider 更新
- **文件**: `packages/payments/provider/redemption/index.ts`
- **更新**: `createCheckoutLink` 现在返回兑换页面的 URL

### 4. 国际化支持
- **英文**: `packages/i18n/translations/en.json`
- **中文**: `packages/i18n/translations/zh.json`

## 使用方式

### 方式 1: 直接访问兑换页面

用户可以直接访问：
```
https://your-app.com/redeem-code
```

### 方式 2: 通过 createCheckoutLink

现在 redemption provider 的 `createCheckoutLink` 会返回兑换页面的 URL，支持以下参数：

```typescript
import { createCheckoutLink } from "@repo/payments";

const checkoutUrl = await createCheckoutLink({
  type: "subscription", // 或 "one-time"
  productId: "prod_123",
  redirectUrl: "/app/dashboard", // 兑换成功后跳转
  organizationId: "org_456", // 可选，为组织兑换
});

// checkoutUrl 将是:
// https://your-app.com/redeem-code?redirectUrl=/app/dashboard&organizationId=org_456&productId=prod_123
```

### 方式 3: API 调用

组件已经集成了 API 调用：

```typescript
// 验证兑换码
const result = await api.payments.verifyCode({ 
  code: "ABCD-EFGH-IJKL" 
});

// 兑换码
const result = await api.payments.redeemCode({ 
  code: "ABCD-EFGH-IJKL",
  organizationId: "org_123" // 可选
});
```

## 页面功能

### 兑换流程

1. **用户输入兑换码**
   - 自动格式化为 `XXXX-XXXX-XXXX` 格式
   - 限制 14 个字符（包括连字符）

2. **验证兑换码**（可选）
   - 点击"验证"按钮
   - 显示兑换码类型、剩余次数、过期时间等信息
   - 验证失败会显示错误原因

3. **兑换**
   - 点击"兑换"按钮
   - 成功后显示成功消息
   - 自动跳转到指定页面（如果提供了 redirectUrl）

### URL 参数

- `redirectUrl`: 兑换成功后跳转的 URL
- `organizationId`: 为特定组织兑换
- `productId`: 产品 ID（仅用于显示）

## 与其他 Payment Providers 的集成

现在 redemption provider 完全兼容现有的 payment 系统接口：

```typescript
// 其他 providers（Stripe、LemonSqueezy 等）
const checkoutUrl = await createCheckoutLink({
  type: "subscription",
  productId: "price_123",
  ...
});
// 返回: https://checkout.stripe.com/...

// Redemption provider
const checkoutUrl = await createCheckoutLink({
  type: "subscription",
  productId: "prod_123",
  ...
});
// 返回: https://your-app.com/redeem-code?productId=prod_123&...
```

## 示例场景

### 1. 促销活动

管理员创建促销码后，分享兑换链接：
```
https://your-app.com/redeem-code?productId=premium_monthly
```

用户访问链接，输入收到的兑换码即可激活会员。

### 2. 企业批量购买

企业购买 50 个兑换码后：
1. 管理员创建 50 个兑换码
2. 分发给员工
3. 员工访问 `/redeem-code` 页面输入兑换码
4. 成功激活企业会员

### 3. 活动奖品

通过 API 创建特殊前缀的兑换码：
```typescript
const codes = await api.payments.redemptionAdmin.createCampaign({
  productId: "premium_annual",
  type: "SUBSCRIPTION",
  subscriptionDurationDays: 365,
  count: 10,
  prefix: "WIN2025",
  notes: "年终抽奖活动"
});

// 获胜者访问: https://your-app.com/redeem-code
// 输入: WIN2025-XXXXXXXX
```

## UI/UX 特性

- ✅ 自动格式化输入
- ✅ 实时验证
- ✅ 错误提示
- ✅ 加载状态
- ✅ 成功/失败反馈
- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ 国际化支持（英文/中文）

## 扩展建议

### 1. 添加二维码支持

可以生成包含兑换码的二维码：
```typescript
import QRCode from "qrcode";

const qrCodeUrl = await QRCode.toDataURL(
  `https://your-app.com/redeem-code?code=ABCD-EFGH-IJKL`
);
```

### 2. 添加兑换历史

在用户设置页面显示用户的兑换历史：
```typescript
const history = await api.payments.redemptionAdmin.getHistory({
  userId: user.id
});
```

### 3. 批量兑换

支持用户一次输入多个兑换码。

### 4. 移动端优化

添加相机扫描二维码功能。
