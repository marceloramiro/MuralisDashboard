export const delayApiCall = async (data: unknown, time: number = 300) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, time);
  });
};
