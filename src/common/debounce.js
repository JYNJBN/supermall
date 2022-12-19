export function debounce(fn, delay) {
  let timer;
  return (...arg) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...arg);
    }, delay);
  };
}
