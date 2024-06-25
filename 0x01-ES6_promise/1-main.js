import getFullResponseFromAPI from "./1-promise.js";

const successPromise = getFullResponseFromAPI(true);
const failurePromise = getFullResponseFromAPI(false);

successPromise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Caught error:', error.message);
  });

failurePromise
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Caught error:', error.message);
  });
