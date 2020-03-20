import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('render ExpensesSummary with one expense', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={253} />);
  expect(wrapper).toMatchSnapshot();
});

test('render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={11} expensesTotal={5345342} />);
  expect(wrapper).toMatchSnapshot();
});
