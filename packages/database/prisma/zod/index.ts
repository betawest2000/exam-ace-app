/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;

// File: UserScalarFieldEnum.schema.ts

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'createdAt', 'updatedAt', 'username', 'role', 'banned', 'banReason', 'banExpires', 'onboardingComplete', 'paymentsCustomerId', 'locale', 'displayUsername', 'twoFactorEnabled'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;

// File: SessionScalarFieldEnum.schema.ts

export const SessionScalarFieldEnumSchema = z.enum(['id', 'expiresAt', 'ipAddress', 'userAgent', 'userId', 'impersonatedBy', 'activeOrganizationId', 'token', 'createdAt', 'updatedAt'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;

// File: AccountScalarFieldEnum.schema.ts

export const AccountScalarFieldEnumSchema = z.enum(['id', 'accountId', 'providerId', 'userId', 'accessToken', 'refreshToken', 'idToken', 'expiresAt', 'password', 'accessTokenExpiresAt', 'refreshTokenExpiresAt', 'scope', 'createdAt', 'updatedAt'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;

// File: VerificationScalarFieldEnum.schema.ts

export const VerificationScalarFieldEnumSchema = z.enum(['id', 'identifier', 'value', 'expiresAt', 'createdAt', 'updatedAt'])

export type VerificationScalarFieldEnum = z.infer<typeof VerificationScalarFieldEnumSchema>;

// File: PasskeyScalarFieldEnum.schema.ts

export const PasskeyScalarFieldEnumSchema = z.enum(['id', 'name', 'publicKey', 'userId', 'credentialID', 'counter', 'deviceType', 'backedUp', 'transports', 'aaguid', 'createdAt'])

export type PasskeyScalarFieldEnum = z.infer<typeof PasskeyScalarFieldEnumSchema>;

// File: TwoFactorScalarFieldEnum.schema.ts

export const TwoFactorScalarFieldEnumSchema = z.enum(['id', 'secret', 'backupCodes', 'userId'])

export type TwoFactorScalarFieldEnum = z.infer<typeof TwoFactorScalarFieldEnumSchema>;

// File: OrganizationScalarFieldEnum.schema.ts

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'logo', 'createdAt', 'metadata', 'paymentsCustomerId'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;

// File: MemberScalarFieldEnum.schema.ts

export const MemberScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'userId', 'role', 'createdAt'])

export type MemberScalarFieldEnum = z.infer<typeof MemberScalarFieldEnumSchema>;

// File: InvitationScalarFieldEnum.schema.ts

export const InvitationScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'email', 'role', 'status', 'expiresAt', 'inviterId'])

export type InvitationScalarFieldEnum = z.infer<typeof InvitationScalarFieldEnumSchema>;

// File: PurchaseScalarFieldEnum.schema.ts

export const PurchaseScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'userId', 'type', 'customerId', 'productId', 'subscriptionId', 'status', 'expiresAt', 'createdAt', 'updatedAt'])

export type PurchaseScalarFieldEnum = z.infer<typeof PurchaseScalarFieldEnumSchema>;

// File: AiChatScalarFieldEnum.schema.ts

export const AiChatScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'userId', 'title', 'messages', 'createdAt', 'updatedAt'])

export type AiChatScalarFieldEnum = z.infer<typeof AiChatScalarFieldEnumSchema>;

// File: RedemptionCodeScalarFieldEnum.schema.ts

export const RedemptionCodeScalarFieldEnumSchema = z.enum(['id', 'code', 'type', 'status', 'productId', 'maxRedemptions', 'currentRedemptions', 'subscriptionDurationDays', 'trialDurationDays', 'expiresAt', 'createdAt', 'updatedAt', 'createdBy', 'metadata', 'notes'])

export type RedemptionCodeScalarFieldEnum = z.infer<typeof RedemptionCodeScalarFieldEnumSchema>;

// File: RedemptionHistoryScalarFieldEnum.schema.ts

export const RedemptionHistoryScalarFieldEnumSchema = z.enum(['id', 'redemptionCodeId', 'userId', 'organizationId', 'purchaseId', 'redeemedAt', 'ipAddress', 'userAgent', 'metadata'])

export type RedemptionHistoryScalarFieldEnum = z.infer<typeof RedemptionHistoryScalarFieldEnumSchema>;

// File: ExamScalarFieldEnum.schema.ts

export const ExamScalarFieldEnumSchema = z.enum(['id', 'title', 'company', 'difficulty', 'description', 'createdAt', 'updatedAt', 'tags'])

export type ExamScalarFieldEnum = z.infer<typeof ExamScalarFieldEnumSchema>;

// File: QuestionScalarFieldEnum.schema.ts

export const QuestionScalarFieldEnumSchema = z.enum(['id', 'examId', 'questionText', 'questionType', 'options', 'correctAnswer', 'explanation', 'createdAt', 'updatedAt'])

export type QuestionScalarFieldEnum = z.infer<typeof QuestionScalarFieldEnumSchema>;

// File: UserExamScalarFieldEnum.schema.ts

export const UserExamScalarFieldEnumSchema = z.enum(['id', 'userId', 'examId', 'createdAt', 'updatedAt'])

export type UserExamScalarFieldEnum = z.infer<typeof UserExamScalarFieldEnumSchema>;

// File: UserFavoriteScalarFieldEnum.schema.ts

export const UserFavoriteScalarFieldEnumSchema = z.enum(['id', 'userId', 'examId', 'questionId', 'createdAt', 'updatedAt'])

export type UserFavoriteScalarFieldEnum = z.infer<typeof UserFavoriteScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: JsonNullValueInput.schema.ts

export const JsonNullValueInputSchema = z.enum(['JsonNull'])

export type JsonNullValueInput = z.infer<typeof JsonNullValueInputSchema>;

// File: QueryMode.schema.ts

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryModeSchema>;

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last'])

export type NullsOrder = z.infer<typeof NullsOrderSchema>;

// File: JsonNullValueFilter.schema.ts

export const JsonNullValueFilterSchema = z.enum(['DbNull', 'JsonNull', 'AnyNull'])

export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilterSchema>;

// File: PurchaseType.schema.ts

export const PurchaseTypeSchema = z.enum(['SUBSCRIPTION', 'ONE_TIME'])

export type PurchaseType = z.infer<typeof PurchaseTypeSchema>;

// File: RedemptionCodeType.schema.ts

export const RedemptionCodeTypeSchema = z.enum(['ONE_TIME', 'TRIAL'])

export type RedemptionCodeType = z.infer<typeof RedemptionCodeTypeSchema>;

// File: RedemptionCodeStatus.schema.ts

export const RedemptionCodeStatusSchema = z.enum(['ACTIVE', 'REDEEMED', 'EXPIRED', 'REVOKED'])

export type RedemptionCodeStatus = z.infer<typeof RedemptionCodeStatusSchema>;

// File: ExamCompany.schema.ts

export const ExamCompanySchema = z.enum(['amazon', 'microsoft', 'google', 'comptia', 'cisco', 'itil', 'pmi', 'oracle', 'salesforce'])

export type ExamCompany = z.infer<typeof ExamCompanySchema>;

// File: ExamDifficulty.schema.ts

export const ExamDifficultySchema = z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'])

export type ExamDifficulty = z.infer<typeof ExamDifficultySchema>;

// File: QuestionType.schema.ts

export const QuestionTypeSchema = z.enum(['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'FILL_IN_BLANK', 'TRUE_FALSE', 'SHORT_ANSWER'])

export type QuestionType = z.infer<typeof QuestionTypeSchema>;

// File: User.schema.ts

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  username: z.string().nullish(),
  role: z.string().nullish(),
  banned: z.boolean().nullish(),
  banReason: z.string().nullish(),
  banExpires: z.date().nullish(),
  onboardingComplete: z.boolean(),
  paymentsCustomerId: z.string().nullish(),
  locale: z.string().nullish(),
  displayUsername: z.string().nullish(),
  twoFactorEnabled: z.boolean().nullish(),
});

export type UserType = z.infer<typeof UserSchema>;


// File: Session.schema.ts

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.date(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  userId: z.string(),
  impersonatedBy: z.string().nullish(),
  activeOrganizationId: z.string().nullish(),
  token: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SessionType = z.infer<typeof SessionSchema>;


// File: Account.schema.ts

export const AccountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullish(),
  refreshToken: z.string().nullish(),
  idToken: z.string().nullish(),
  expiresAt: z.date().nullish(),
  password: z.string().nullish(),
  accessTokenExpiresAt: z.date().nullish(),
  refreshTokenExpiresAt: z.date().nullish(),
  scope: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AccountType = z.infer<typeof AccountSchema>;


// File: Verification.schema.ts

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
});

export type VerificationType = z.infer<typeof VerificationSchema>;


// File: Passkey.schema.ts

export const PasskeySchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  publicKey: z.string(),
  userId: z.string(),
  credentialID: z.string(),
  counter: z.number().int(),
  deviceType: z.string(),
  backedUp: z.boolean(),
  transports: z.string().nullish(),
  aaguid: z.string().nullish(),
  createdAt: z.date().nullish(),
});

export type PasskeyType = z.infer<typeof PasskeySchema>;


// File: TwoFactor.schema.ts

export const TwoFactorSchema = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string(),
});

export type TwoFactorType = z.infer<typeof TwoFactorSchema>;


// File: Organization.schema.ts

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().nullish(),
  logo: z.string().nullish(),
  createdAt: z.date(),
  metadata: z.string().nullish(),
  paymentsCustomerId: z.string().nullish(),
});

export type OrganizationType = z.infer<typeof OrganizationSchema>;


// File: Member.schema.ts

export const MemberSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.date(),
});

export type MemberType = z.infer<typeof MemberSchema>;


// File: Invitation.schema.ts

export const InvitationSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().nullish(),
  status: z.string(),
  expiresAt: z.date(),
  inviterId: z.string(),
});

export type InvitationType = z.infer<typeof InvitationSchema>;


// File: Purchase.schema.ts

export const PurchaseSchema = z.object({
  id: z.string(),
  organizationId: z.string().nullish(),
  userId: z.string().nullish(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  productId: z.string(),
  subscriptionId: z.string().nullish(),
  status: z.string().nullish(),
  expiresAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PurchaseModel = z.infer<typeof PurchaseSchema>;

// File: AiChat.schema.ts

export const AiChatSchema = z.object({
  id: z.string(),
  organizationId: z.string().nullish(),
  userId: z.string().nullish(),
  title: z.string().nullish(),
  messages: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").default("[]"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AiChatType = z.infer<typeof AiChatSchema>;


// File: RedemptionCode.schema.ts

export const RedemptionCodeSchema = z.object({
  id: z.string(),
  code: z.string(),
  type: RedemptionCodeTypeSchema,
  status: RedemptionCodeStatusSchema.default("ACTIVE"),
  productId: z.string(),
  maxRedemptions: z.number().int().default(1),
  currentRedemptions: z.number().int(),
  subscriptionDurationDays: z.number().int().nullish(),
  trialDurationDays: z.number().int().nullish(),
  expiresAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.string().nullish(),
  metadata: z.string().nullish(),
  notes: z.string().nullish(),
});

export type RedemptionCodeModel = z.infer<typeof RedemptionCodeSchema>;

// File: RedemptionHistory.schema.ts

export const RedemptionHistorySchema = z.object({
  id: z.string(),
  redemptionCodeId: z.string(),
  userId: z.string().nullish(),
  organizationId: z.string().nullish(),
  purchaseId: z.string().nullish(),
  redeemedAt: z.date(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  metadata: z.string().nullish(),
});

export type RedemptionHistoryType = z.infer<typeof RedemptionHistorySchema>;


// File: Exam.schema.ts

export const ExamSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: ExamCompanySchema.nullish(),
  difficulty: ExamDifficultySchema.default("BEGINNER"),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tags: z.array(z.string()),
});

export type ExamType = z.infer<typeof ExamSchema>;


// File: Question.schema.ts

export const QuestionSchema = z.object({
  id: z.string(),
  examId: z.string(),
  questionText: z.string(),
  questionType: QuestionTypeSchema,
  options: z.array(z.string()),
  correctAnswer: z.array(z.string()),
  explanation: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type QuestionModel = z.infer<typeof QuestionSchema>;

// File: UserExam.schema.ts

export const UserExamSchema = z.object({
  id: z.string(),
  userId: z.string(),
  examId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserExamType = z.infer<typeof UserExamSchema>;


// File: UserFavorite.schema.ts

export const UserFavoriteSchema = z.object({
  id: z.string(),
  userId: z.string(),
  examId: z.string(),
  questionId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserFavoriteType = z.infer<typeof UserFavoriteSchema>;

