import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Reducer default setup correctly test
test('setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'} );
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// Sort by amount test
test('set sortyBy to amount', () => {
  const action = { type: 'SORT_BY', value: 'amount' };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

// Sort by date test
test('set sortyBy to date', () => {
  const currentState = {
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY', value: 'date' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// Set text filter test
test('set text filter to text', () => {
  const text = ''
  const action = {
    type: 'UPDATE_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('');
});

test('set text filter to text', () => {
  const currentState = {
    text: 'coffee'
  };
  const text = 'beer'
  const action = {
    type: 'UPDATE_TEXT_FILTER',
    text
  };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('beer');
});

// Set startDate filter test
test('set startDate filter to date', () => {
  const action = {
    type: 'SET_START_DATE',
    date: moment(0).add(4, 'days')
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0).add(4, 'days'));
});

// Set endDate filter test
test('set endDate filter to date', () => {
  const action = {
    type: 'SET_START_DATE',
    date: moment(0).subtract(4, 'days')
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0).subtract(4, 'days'));
});
