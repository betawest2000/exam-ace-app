import { describe, expect, it } from "vitest";
import type { ActiveOrganization } from "../auth";
import { isOrganizationAdmin } from "./helper";

describe("isOrganizationAdmin 权限检查测试", () => {
	it("应该在用户是组织 owner 时返回 true", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-1",
					role: "owner",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(organization, user)).toBe(true);
	});

	it("应该在用户是组织 admin 时返回 true", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-1",
					role: "admin",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(organization, user)).toBe(true);
	});

	it("应该在用户是系统管理员时返回 true", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-1",
					role: "member",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "admin", // 系统管理员
		};

		expect(isOrganizationAdmin(organization, user)).toBe(true);
	});

	it("应该在普通成员时返回 false", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-1",
					role: "member",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(organization, user)).toBe(false);
	});

	it("应该在用户不在组织中时返回 false", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-2",
					role: "owner",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(organization, user)).toBe(false);
	});

	it("应该在 organization 为 null 时返回 false", () => {
		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(null, user)).toBe(false);
	});

	it("应该在 organization 为 undefined 时返回 false", () => {
		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(undefined, user)).toBe(false);
	});

	it("应该在 user 为 null 时返回 false", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [],
		} as ActiveOrganization;

		expect(isOrganizationAdmin(organization, null)).toBe(false);
	});

	it("应该在 user 为 undefined 时返回 false", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [],
		} as ActiveOrganization;

		expect(isOrganizationAdmin(organization, undefined)).toBe(false);
	});

	it("应该处理组织成员列表为空的情况", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: "user",
		};

		expect(isOrganizationAdmin(organization, user)).toBe(false);
	});

	it("应该处理用户角色为 null 的情况", () => {
		const organization: ActiveOrganization = {
			id: "org-1",
			name: "Test Org",
			slug: "test-org",
			logo: null,
			createdAt: new Date(),
			metadata: null,
			members: [
				{
					id: "member-1",
					organizationId: "org-1",
					userId: "user-1",
					role: "member",
					createdAt: new Date(),
				},
			],
		} as ActiveOrganization;

		const user = {
			id: "user-1",
			role: null,
		};

		expect(isOrganizationAdmin(organization, user)).toBe(false);
	});
});
