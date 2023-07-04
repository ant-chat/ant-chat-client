import { JSX } from 'solid-js';
import { isFunction } from './assertion';

export const callHandler = <T, E extends Event>(
  handler: JSX.EventHandlerUnion<T, E> | undefined,
  event: E & {
    currentTarget: T;
    target: Element;
  },
) => {
  if (handler) {
    if (isFunction(handler)) {
      handler(event);
    } else {
      handler[0](handler[1], event);
    }
  }
};
