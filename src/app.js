import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { updateFilterText, sortByAmount, sortByDate } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(addExpense({
  description: 'First bill (water)',
  amount: 20002,
  createdAt: -99823
}));

store.dispatch(addExpense({
  description: 'Second bill',
  amount: 10000,
  createdAt: 2312
}));

store.dispatch(addExpense({
  description: 'Third bill (water)',
  amount: 500,
  createdAt: 1000
}));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
