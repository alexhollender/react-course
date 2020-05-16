import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { updateFilterText, sortBy, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.updateFilterText(e.target.value);
  };
  onSortChange = (e) => {
    this.props.sortBy(e.target.value);
  };
  render() {
    return (
      <div className="flex-container filter-group">
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} placeholder="Search for expense..." className="textInput"/>
        <select value={this.props.filters.sortBy} onChange={this.onSortChange} className="sortInput">
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId='1'
          endDate={this.props.filters.endDate}
          endDateId='2'
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  updateFilterText: (text) => dispatch(updateFilterText(text)),
  sortBy: (value) => dispatch(sortBy(value)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
