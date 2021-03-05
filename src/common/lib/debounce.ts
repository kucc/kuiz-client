const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func(args);
    }, delay);
  };
};

export default debounce;
