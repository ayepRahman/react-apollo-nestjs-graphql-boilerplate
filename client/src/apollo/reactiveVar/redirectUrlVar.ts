import { makeVar } from '@apollo/client';
import { LocalStorage } from 'enums/LocalStorage';

const redirectUrl = localStorage.getItem(LocalStorage.REDIRECT_URL);

export interface RedirectUrlVarProps {
  redirectUrl: string;
}

export const redirectUrlVar = makeVar<RedirectUrlVarProps>({
  redirectUrl: redirectUrl || '',
});
