import { A } from '@solidjs/router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import style from './style.module.css';
import { PUBLIC_ROUTE_PATH } from '../../router/publicRoutePath';

const Login = () => {
  return (
    <div class={style.formContainer}>
      <A href={PUBLIC_ROUTE_PATH.join}>회원가입</A>
      <form>
        <Input />
        <Input />
        <Button type="submit" />
      </form>
    </div>
  );
};

export default Login;
