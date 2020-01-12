// Object destructuring

const book = {
  title: 'The Pilgram at Tinker Creek',
  author: 'Annie Dillard',
  published: {
    by: 'Penguin',
    date: '1974'
  }
};

const otherBook = {
  author: 'William Gibson',
  published: {
    by: 'Penguin',
    date: '1988'
  }
};

const { title } = book;
const { titleTwo = 'Untitled'} = otherBook;

console.log(title);
console.log(titleTwo);

const test = ({title = 'Sans title'}) => {
  console.log(title);
};

console.log(test(otherBook));

const testTwo = ({title = 'No title'} = {}) => {
  console.log(title);
}

console.log(testTwo());

//
// function myFunc(opts) {
//   var name = opts.name;
//   var age = opts.age;
//   console.log(name, age);
// }
//
// function myFunc({name, age}) {
//   console.log(name, age);
// }
//
// const myFunc = ({name, age}) => {
//   console.log(name, age);
// }

// Array destructuring

// const address = ['464', 'Black willow lane', 'Charlotte', 'Vermont', '05445', 'USA'];
//
// const [streetNumber, streetName, city, state, zip, country] = address;
//
// console.log(`you are in ${city} in the state of ${state}`);
//
// const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
//
// const [itemName, priceSmall, priceMedium, priceLarge] = item;
//
// console.log(`The price of a medium ${itemName} is ${priceMedium}`);
