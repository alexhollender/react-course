import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove}>remove</button>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => dispatch(removeExpense(expenseId)),
  editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
