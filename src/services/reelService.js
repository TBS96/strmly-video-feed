export const simulateLikeAPI = () => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      resolve(isSuccess);
    }, 800);
  });
};