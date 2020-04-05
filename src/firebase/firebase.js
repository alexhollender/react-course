import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCL5JYajrqh1lVPnm3k_ff4fL_aFAQ8zZs",
  authDomain: "expensify-react-939cf.firebaseapp.com",
  databaseURL: "https://expensify-react-939cf.firebaseio.com",
  projectId: "expensify-react-939cf",
  storageBucket: "expensify-react-939cf.appspot.com",
  messagingSenderId: "182952633787",
  appId: "1:182952633787:web:d61db9465d170f66c6d09e"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });

//child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

setTimeout(() => {
  database.ref('expenses').push({
    title: 'Second note',
    body: 'more note text'
  });
}, 7000);

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });

// setTimeout(() => {
//   attributes.update({
//     'location/city': 'Miami',
//   });
// }, 1000);


//
// attributes.set({
//   height: '5 feet, 9 inches',
//   weight: '135 lbs',
//   name: 'Alex',
//   location: {
//     city: 'Brooklyn',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref('isHappy').remove();
// attributes.set(null);
