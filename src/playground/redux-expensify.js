import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE action generator
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE action generator
const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE action generator
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          const updates = action.updates;
          return {
            ...expense, ...updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// UPDATE_TEXT_FILTER action generator
const updateFilterText = (text = '') => ({
  type: 'UPDATE_TEXT_FILTER',
  text
});

// SORT_BY_AMOUNT action generator
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE action generator
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE action generator
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE action generator
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_FILTER':
      return {
        ...state, text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state, sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state, sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state, startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state, endDate: action.date
      }
    default:
      return state;
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Create store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState());
});


// Actions
// const expenseTwo = store.dispatch(addExpense({ description: 'Rent'}));
// const expenseThree = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300,
  createdAt: 1000
}));

store.dispatch(addExpense({
  description: 'Haircut',
  amount: 165,
  createdAt: 2000
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 12300,
  createdAt: -1000
}));

//
// store.dispatch(removeExpense(expenseTwo.expense.id));
//
// store.dispatch(editExpense(expenseThree.expense.id, { amount: 500, description: 'Hello Kitty'}));
//
// store.dispatch(updateFilterText('Test text'));
//
store.dispatch({type: 'SORT_BY_AMOUNT'});
store.dispatch(updateFilterText('Rent'));
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setEndDate(500));

// dummy data that describes how our store will look
const demoState = {
  expenses: [{
    id: 'asdafweffsf',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
