import { invoke } from '@tauri-apps/api';

export type SignUpRequestParams = {
  username: string;
  password: string;
};

export type SignUpResponseProps = {
  user_id: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

export const fetchSignUp = (params: SignUpRequestParams) => {
  return invoke<SignUpResponseProps>('sign_up', params);
};
