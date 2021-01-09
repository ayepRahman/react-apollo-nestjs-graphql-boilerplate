import { makeVar } from '@apollo/client';
import { LocalStorage } from 'enums/LocalStorage';

const currentUser = JSON.parse(localStorage.getItem(LocalStorage.USER) || '{}');

export interface UserVarProps {
  username: string;
  email: string;
  accessToken: string;
  isLogin: boolean;
}

export const userVar = makeVar<UserVarProps>({
  username: currentUser?.username ?? '',
  email: currentUser?.email ?? '',
  accessToken: `${localStorage.getItem(LocalStorage.X_TOKEN) || ''}`,
  isLogin: !!`${localStorage.getItem(LocalStorage.X_TOKEN) || ''}`,
});
