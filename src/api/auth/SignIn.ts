import { invoke } from '@tauri-apps/api';

export type SignInRequestParams = {
  username: string;
  password: string;
};

export type SignInResponseProps = {
  user_id: string;
  access_token: string;
  refresh_token: string;
  expires_in: string;
};

export const fetchSignIn = (params: SignInRequestParams) =>
  invoke<SignInResponseProps>('sign_in', params);
