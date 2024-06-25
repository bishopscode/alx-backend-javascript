export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: 'API response data' });
      } else {
        reject(new Error('Failed to fetch data from API'));
      }
    }, 1000);
  });
}
