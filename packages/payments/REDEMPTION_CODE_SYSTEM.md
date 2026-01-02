# Redemption Code Payment System

## 概述

基于 redemption code 的会员激活系统，允许用户通过兑换码开通会员资格，而不需要传统的支付流程。

## 系统架构

### 数据库 Schema

#### RedemptionCode（兑换码表）
- `id`: 唯一标识
- `code`: 兑换码（唯一，格式: XXXX-XXXX-XXXX）
- `type`: 类型（SUBSCRIPTION/ONE_TIME/TRIAL）
- `productId`: 产品ID
- `status`: 状态（ACTIVE/REDEEMED/EXPIRED/REVOKED）
- `maxRedemptions`: 最大兑换次数
- `currentRedemptions`: 当前已兑换次数
- `subscriptionDurationDays`: 订阅时长（天）
- `trialDurationDays`: 试用时长（天）
- `expiresAt`: 过期时间
- `createdBy`: 创建者
- `metadata`: 元数据
- `notes`: 备注

#### RedemptionHistory（兑换历史表）
- `id`: 唯一标识
- `redemptionCodeId`: 兑换码ID
- `userId`: 用户ID
- `organizationId`: 组织ID
- `purchaseId`: 购买记录ID
- `redeemedAt`: 兑换时间
- `ipAddress`: IP地址
- `userAgent`: 用户代理
- `metadata`: 元数据

## API 接口

### 用户接口

#### 1. 验证兑换码
```typescript
const result = await api.payments.verifyCode({
  code: "ABCD-EFGH-IJKL"
});

// 返回
{
  valid: boolean;
  reason?: string;
  details?: {
    type: string;
    productId: string;
    expiresAt: Date | null;
    remainingRedemptions: number;
  };
}
```

#### 2. 兑换码
```typescript
const result = await api.payments.redeemCode({
  code: "ABCD-EFGH-IJKL",
  organizationId: "org_123" // 可选，为组织兑换
});

// 返回
{
  success: boolean;
  purchaseId?: string;
  message?: string;
  expiresAt?: Date;
}
```

### 管理员接口

#### 1. 创建单个兑换码
```typescript
const code = await api.payments.redemptionAdmin.createCode({
  productId: "prod_123",
  type: "SUBSCRIPTION",
  subscriptionDurationDays: 30,
  maxRedemptions: 1,
  expiresAt: new Date("2025-12-31"),
  notes: "黑五促销活动",
  metadata: { campaign: "black_friday_2025" }
});
```

#### 2. 批量创建兑换码
```typescript
const result = await api.payments.redemptionAdmin.createBatch({
  productId: "prod_123",
  type: "SUBSCRIPTION",
  subscriptionDurationDays: 30,
  maxRedemptions: 1,
  count: 100, // 创建100个
  notes: "批量促销码"
});

// 返回
{
  count: 100,
  codes: [...]
}
```

#### 3. 创建活动兑换码（带前缀/后缀）
```typescript
const result = await api.payments.redemptionAdmin.createCampaign({
  productId: "prod_123",
  type: "TRIAL",
  trialDurationDays: 7,
  count: 50,
  prefix: "BF2025", // 前缀
  suffix: "TRIAL",  // 后缀
  notes: "黑五试用码"
});

// 生成格式：BF2025-XXXXXXXX-TRIAL
```

#### 4. 查询兑换码列表
```typescript
const codes = await api.payments.redemptionAdmin.listCodes({
  status: "ACTIVE",
  type: "SUBSCRIPTION",
  includeExpired: false
});
```

#### 5. 获取兑换码详情
```typescript
const code = await api.payments.redemptionAdmin.getCodeById({
  id: "code_123"
});
```

#### 6. 更新兑换码
```typescript
const code = await api.payments.redemptionAdmin.updateCode({
  id: "code_123",
  status: "ACTIVE",
  maxRedemptions: 10,
  notes: "更新后的备注"
});
```

#### 7. 撤销兑换码
```typescript
const code = await api.payments.redemptionAdmin.revokeCode({
  id: "code_123"
});
```

#### 8. 删除兑换码
```typescript
await api.payments.redemptionAdmin.deleteCode({
  id: "code_123"
});
```

#### 9. 查询兑换历史
```typescript
const history = await api.payments.redemptionAdmin.getHistory({
  redemptionCodeId: "code_123", // 可选
  userId: "user_123",           // 可选
  organizationId: "org_123",    // 可选
  startDate: new Date("2025-01-01"),
  endDate: new Date("2025-12-31")
});
```

## 使用场景

### 1. 促销活动
```typescript
// 创建限时促销码（100个，30天有效期）
const codes = await api.payments.redemptionAdmin.createCampaign({
  productId: "premium_monthly",
  type: "SUBSCRIPTION",
  subscriptionDurationDays: 30,
  count: 100,
  prefix: "PROMO2025",
  expiresAt: new Date("2025-12-31"),
  notes: "2025年促销活动"
});
```

### 2. 用户试用
```typescript
// 创建7天试用码（可多次使用）
const trialCode = await api.payments.redemptionAdmin.createCode({
  productId: "premium_trial",
  type: "TRIAL",
  trialDurationDays: 7,
  maxRedemptions: 1000, // 可兑换1000次
  notes: "产品试用码"
});
```

### 3. 一次性激活码
```typescript
// 创建一次性永久激活码
const code = await api.payments.redemptionAdmin.createCode({
  productId: "premium_lifetime",
  type: "ONE_TIME",
  maxRedemptions: 1,
  notes: "年度大奖奖品"
});
```

### 4. 企业批量购买
```typescript
// 为企业创建50个年度订阅码
const codes = await api.payments.redemptionAdmin.createBatch({
  productId: "enterprise_annual",
  type: "SUBSCRIPTION",
  subscriptionDurationDays: 365,
  count: 50,
  notes: "企业客户订单 #12345"
});

// 企业管理员分发给员工
// 员工使用：
await api.payments.redeemCode({
  code: codes[0].code
});
```

## 兑换流程

1. **用户获取兑换码**（通过活动、购买等渠道）
2. **验证兑换码**（可选，前端可先验证展示信息）
   ```typescript
   const validation = await api.payments.verifyCode({ code });
   if (validation.valid) {
     // 显示兑换详情
   }
   ```
3. **执行兑换**
   ```typescript
   const result = await api.payments.redeemCode({ 
     code,
     organizationId // 如果为组织兑换
   });
   ```
4. **系统自动创建 Purchase 记录**，开通会员资格

## 兑换码状态说明

- **ACTIVE**: 可用状态，可以被兑换
- **REDEEMED**: 已兑换完毕（达到最大兑换次数）
- **EXPIRED**: 已过期（超过 expiresAt 时间）
- **REVOKED**: 已撤销（管理员手动撤销）

## 安全特性

1. **事务保证**: 使用数据库事务确保兑换过程的原子性
2. **并发控制**: 防止同一兑换码被多次重复兑换
3. **自动过期**: 系统自动检测并更新过期的兑换码
4. **审计日志**: 完整记录每次兑换的IP、UA等信息
5. **权限控制**: 管理功能需要 admin 权限

## 数据库迁移

运行以下命令创建数据库表：

```bash
cd packages/database
pnpm prisma migrate dev --name add_redemption_code_system
```

## 扩展建议

### 1. 前端组件示例

```typescript
// RedeemCodeForm.tsx
import { useState } from 'react';
import { api } from '@/lib/api';

export function RedeemCodeForm() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRedeem = async () => {
    setLoading(true);
    try {
      const result = await api.payments.redeemCode({ code });
      if (result.success) {
        alert(`兑换成功！会员有效期至 ${result.expiresAt}`);
      }
    } catch (error) {
      alert(`兑换失败：${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input 
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder="输入兑换码 (XXXX-XXXX-XXXX)"
        maxLength={14}
      />
      <button onClick={handleRedeem} disabled={loading}>
        {loading ? '兑换中...' : '兑换'}
      </button>
    </div>
  );
}
```

### 2. 管理后台页面

- 兑换码生成页面
- 兑换码列表/查询页面
- 兑换历史统计页面
- 活动管理页面

### 3. 统计分析

可以添加以下查询：
- 兑换码使用率统计
- 活动效果分析
- 用户来源分析
- 时间分布统计

## 与其他 Provider 的集成

Redemption code provider 已集成到现有的 payments 系统，与 Stripe、LemonSqueezy 等其他 provider 并列存在。

主要区别：
- **传统 Provider**: 需要支付流程 → 创建订阅 → 开通会员
- **Redemption Provider**: 直接兑换码 → 开通会员（无需支付）

两者可以共存，用户可以选择：
1. 通过传统方式付费购买
2. 通过兑换码激活会员资格
