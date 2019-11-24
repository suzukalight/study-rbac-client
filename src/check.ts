import { Rule } from './rbac-rules';

export const check = (rules: Rule, role: string, action: string, data?: Object) => {
  const permissions = rules[role];
  if (!permissions) return false;

  const staticPermissions = permissions.static;
  if (staticPermissions && staticPermissions.includes(action)) return true;

  const dynamicPermissions = permissions.dynamic;
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) return false;
    return permissionCondition(data);
  }

  return false;
};
