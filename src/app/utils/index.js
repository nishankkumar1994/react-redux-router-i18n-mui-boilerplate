import moment from 'moment';

export const secureFetch = (url, method, data) => new Promise((resolve, reject) => {
  fetch(url, {
    method: method || 'GET',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((response) => {
    // response only can be ok in range of 2XX
    if (response.ok) {
      resolve(response.json());
    } else {
      // handle errors in the way you want to
      let msg = 'Something went wrong.';
      switch (response.status) {
        case 404:
          msg = 'Object not found';
          break;
        case 500:
          msg = 'Internal server error';
          break;
        default:
          msg = 'Some error occured';
          break;
      }
      // here you also can throw custom error too
      reject({ message: msg }); // eslint-disable-line prefer-promise-reject-errors
    }
  })
    .catch((error) => {
      // it will be invoked mostly for network errors
      // do what ever you want to do with error here
      // console.log(error);
      reject(error);
    });
});

export const getFormattedDate = date => moment(date).format('DD MMM YY');
