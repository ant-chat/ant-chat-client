import { A } from '@solidjs/router';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PUBLIC_ROUTE_PATH } from '../../router/publicRoutePath';

import style from './style.module.css';

const Login = () => {
  return (
    <div class={style.formContainer}>
      <A href={PUBLIC_ROUTE_PATH.join}>회원가입</A>
      <form class={style.form}>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
};

export default Login;
