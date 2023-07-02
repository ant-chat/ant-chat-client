import { JSX, createSignal } from 'solid-js';
import { A } from '@solidjs/router';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PUBLIC_ROUTE_PATH } from '../../router/publicRoutePath';
import { fetchSignUp } from '../../api/auth/SignUp';

const Join = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleSubmit: JSX.FormHTMLAttributes<HTMLFormElement>['onSubmit'] =
    async (e) => {
      e.preventDefault();

      await fetchSignUp({
        username: username(),
        password: password(),
      });
    };

  return (
    <div>
      <A href={PUBLIC_ROUTE_PATH.login}>로그인</A>
      <form onSubmit={handleSubmit}>
        <Input onInput={(e) => setUsername(e.target.value)} />
        <Input onInput={(e) => setPassword(e.target.value)} />
        <Button type="submit" />
      </form>
    </div>
  );
};

export default Join;
