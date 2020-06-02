const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const allSettled = (promises) => new Promise((resolve) => {
    const result = [];
    const checkDone = () => result.length === promises.length && resolve(result);
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise
          .then((value) => {
            result.push({ status: FULFILLED, value });
            checkDone();
          })
          .catch((err) => {
            result.push({ status: REJECTED, reason: err });
            checkDone();
          });
      } else {
        result.push({ status: FULFILLED, value: promise });
        checkDone();
      }
    });
  });

export { allSettled };
