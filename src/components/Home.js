import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const Home = () => (
  <div>
    <ExpensesSummary />
    <div className="page-container">
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  </div>
);

export default Home;
