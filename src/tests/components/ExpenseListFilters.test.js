import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let updateFilterText, sortBy, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  updateFilterText = jest.fn();
  sortBy = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      updateFilterText={updateFilterText}
      sortBy={sortBy}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(updateFilterText).toHaveBeenLastCalledWith(value);
});

test('handle sort by change', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortBy).toHaveBeenCalled();
});

test('handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
