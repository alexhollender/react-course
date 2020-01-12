// UPDATE_TEXT_FILTER action generator
export const updateFilterText = (text = '') => ({
  type: 'UPDATE_TEXT_FILTER',
  text
});

// SORT_BY action generator
export const sortBy = (value) => ({
  type: 'SORT_BY',
  value
});

// SET_START_DATE action generator
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE action generator
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});
