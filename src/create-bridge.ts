import { isBackground } from "webext-detect";
import { createBackgroundContext } from "./background";
import { createContentScriptContext } from "./content-script";

type OnReturnKeys<T> = {
  [Prop in keyof T as `on${Capitalize<string & Prop>}`]: (data: T[Prop]) => any;
};

export function createBridge<
  // eslint-disable-next-line space-before-function-paren
  T extends Record<string, (...args: any[]) => any>
>() {
  const { sendMessage, onMessage } = isBackground()
    ? createBackgroundContext()
    : createContentScriptContext();
  return new Proxy(
    {},
    {
      get(_target, prop: keyof T & string) {
        const isOn = prop.toString().startsWith("on");
        const name = prop.substring(isOn ? 2 : 0);

        return (arg: any) => {
          const callback = arg as T[typeof prop];
          if (isOn) {
            const onName = name.charAt(0).toLowerCase() + name.slice(1);
            onMessage(onName, callback);
          } else {
            sendMessage(name, arg);
          }
        };
      },
    }
  ) as T & OnReturnKeys<T>;
}
