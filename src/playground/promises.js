const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Alex',
      age: 30
    });
    reject('something went wrong');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
