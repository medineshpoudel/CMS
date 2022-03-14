import { useNavigate } from 'react-router-dom';
import {
  useDeleteRequest,
  useFetchItem,
  useFetchList,
  useSaveRequest,
} from '~/hooks/common/request.hooks';
import { ADMIN_USER, CATEGORY_PRODUCT } from '~/http/endpoints';
import queryClient from '~/http/queryClient';
import { User } from '~/interface/auth.interface';
import { MutationOptions } from '~/interface/common.interface';

const KEY = 'category';

export const useCategoryList = () => useFetchList<any>([KEY], CATEGORY_PRODUCT.BASE);

export const useAdminItem = (id: string | number) =>
  useFetchItem<User>([KEY, `${id}`], ADMIN_USER.SINGLE(id));

export const useSaveAdminUser = (options?: MutationOptions) => {
  const navigate = useNavigate();
  const endpoint = options?.id ? ADMIN_USER.SINGLE(options.id) : ADMIN_USER.BASE;
  const onSuccess = () => {
    queryClient.invalidateQueries(KEY);
    navigate('/admin');
  };

  return useSaveRequest(endpoint, {
    ...options,
    editing: !!options?.id,
    onSuccess: options?.onSuccess || onSuccess,
  });
};

export const useDeleteCategory = (options?: MutationOptions) => {
  return useDeleteRequest(KEY, CATEGORY_PRODUCT.SINGLE, options);
};
