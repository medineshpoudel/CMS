import { useFetchList, useSaveRequest } from '~/hooks/common/request.hooks';
import { ROLE } from '~/http/endpoints';
import { SelectOption } from '~/interface/common.interface';

const ROLE_KEYS = {
  OPTIONS: 'role-options',
};
const PERMISSION_KEYS = {
  OPTIONS: 'permissions',
};

export const useRoleOptions = () =>
  useFetchList<SelectOption[]>([ROLE_KEYS.OPTIONS], ROLE.OPTIONS());

export const usePermissionOptions = () =>
  useFetchList<SelectOption[]>([PERMISSION_KEYS.OPTIONS], ROLE.PERMISSIONS());
