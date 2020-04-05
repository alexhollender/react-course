const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Alex',
    //   age: 30
    // });
    reject('something went wrong');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error);
});
