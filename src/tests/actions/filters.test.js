import moment from 'moment';
import {
  updateFilterText,
  sortBy,
  setStartDate,
  setEndDate
} from '../../actions/filters';

// Update filter text test
test('generate update filter text action object', () => {
  const text = 'water';
  const action = updateFilterText(text);
  expect(action).toEqual({
    type: 'UPDATE_TEXT_FILTER',
    text: 'water'
  });
});

test('generate update filter text action object', () => {
  const action = updateFilterText();
  expect(action).toEqual({
    type: 'UPDATE_TEXT_FILTER',
    text: ''
  });
});

// Sort by test
test('generate sort by date action object', () => {
  const action = sortBy('date');
  expect(action).toEqual({
    type: 'SORT_BY',
    value: 'date'
  });
});

// Set start date test
test('generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
});

// Set end date test
test('generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
});
