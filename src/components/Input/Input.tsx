import { JSX, createSignal, splitProps } from 'solid-js';

import styles from './style.module.css';
import { callHandler } from '../../utils';

export type InputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <div class={styles.inputContainer}>
      <input
        class={styles.input}
        type="text"
        spellcheck={false}
        autocomplete="off"
        autocorrect="off"
        {...props}
      />
    </div>
  );
};

export default Input;
