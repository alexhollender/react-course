import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// No expenses provided to function
test('total expenses with no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

// One expense provided to function (object)
test('total a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(expenses[0].amount);
});

// Multiple expenses provided to function (array)
test('total an array of expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
