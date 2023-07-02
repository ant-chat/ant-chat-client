import { JSX } from 'solid-js';

export type InputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      spellcheck={false}
      autocomplete="off"
      autocorrect="off"
      {...props}
    />
  );
};

export default Input;
