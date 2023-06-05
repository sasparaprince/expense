import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {


    const saveExpenseDataHandler = (enterdExpenseData)=>{
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
            };
props.onAddExpense(expenseData)
            

    }

    return(

            <div className="new-expense">
                <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}/>
            </div>

    )
}

export default NewExpense;