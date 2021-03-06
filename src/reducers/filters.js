import moment from 'moment';

// Filters Reducer

// default state
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

// reducer
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_FILTER':
      return {
        ...state, text: action.text
      };
    case 'SORT_BY':
      return {
        ...state, sortBy: action.value
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
