import React from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  return (
    <li>
      <div>
        <span>{expense.charge}</span>
        <span>{expense.amount}</span>
      </div>
      <button className='edit-btn'
        onClick={() => handleEdit(expense.id)}
      >
        <MdEdit />
      </button>
      <button className='clear-btn'
        onClick={() =>
          handleDelete(expense.id)
        }
      >
        <MdDelete />
      </button>
    </li>
  )
}

export default ExpenseItem