import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Reducer default setup correctly test
test('setup default filter values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'} );
  expect(state).toEqual([]);
});

// Remove expense test with id
test('remove expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    ...expenses[0]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

// Remove expense test without id
test('remove expense without id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'xyz'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// Add expense test
test('add expense', () => {
  const expense = {
    id: '3',
    description: 'DVDs',
    note: '',
    amount: 4595,
    createdAt: 2000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

// Edit expense test
test('edit expense', () => {
  const updates = {
    description: 'Pizza',
    note: '',
    amount: 444,
    createdAt: 1917,
    id: 1
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual(updates);
});

// Edit expense w/o id test
test('edit expense without id', () => {
  const updates = {
    description: 'Pizza'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'xyz',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// set expenses in Redux store
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
