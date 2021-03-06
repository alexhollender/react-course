import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

// Text filter test
test('filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1] ]);
});

// Start date filter test
test('filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2],expenses[0] ]);
});

// End date filter test
test('filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).subtract(3, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1] ]);
});

// Sort by date test
test('sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

// Sort by amount test
test('sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});
