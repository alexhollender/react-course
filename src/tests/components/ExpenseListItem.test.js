import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('render ExpenseListItem with an expense', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
