export function debounce(func: Function, delay: number): Function {
  let timerId: ReturnType<typeof setTimeout>;

  return function action(...args: Parameters<any>[]): void {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(action, args);
    }, delay);
  };
}
