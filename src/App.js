import React from 'react'
import { useState } from "react";

import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert';

const App = () => {

  const [charge, setCharge] = useState("");
  const [id, setId] = useState('');
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);

  const [alert, setAlert] = useState({ show: false });

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 2000 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ])

  const clearItems = () => {
    setExpenses([]);
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !==id)
    setExpenses(newExpenses);
    handleAlert({type:'danger', text: '아이템이 삭제되었습니다.'})
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item
        })

        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' })
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount }

        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({type: 'success', text: '아이템이 생성되었습니다.'})
      }
    } else {
      handleAlert({type: 'danger', text: 'charger는 빈 값을 수 없으며 amount는 0보다 커야 합니다.'})
    }
  }



  return (
    <main>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>

      <div>
        <ExpenseForm
          charge={charge}
          amount={amount}
          edit={edit}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          hendleSubmit={handleSubmit}
        />
      </div>

      <div>
        <ExpenseList 
        expenses={expenses}
        clearItems={clearItems}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
      </div>

    </main>

  )
}

export default App