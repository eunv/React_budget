import React from 'react'

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, edit, handleSubmit}) => {


  return (
    <form onChange={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>
            지출 항목
          </label>
          <input
            className='form-control'
            type='text'
            id='charge'
            name='charge'
            value={charge}
            placeholder='예) 렌트비'
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>
            비용
          </label>
          <input
            className='form-control'
            type='number'
            id='amount'
            name='amount'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        {edit ? "수정" : "제출"}
      </button>
    </form>
  )
}

export default ExpenseForm