import { useState } from 'react'
import '../styles/Form.css'
import {useTransaction,useUpdateTransaction} from '../contexts/TransactionContext'
import axios from 'axios';

export const Form = () => {
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("grocery");
    const [amount,setAmount] = useState("");
    const [type,setType] = useState("expense");
    const {transactions,setTransaction} = useTransaction();
    const onSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = await axios.post("/api/v1/transactions/",{description: description,category:category,amount:amount,type:(type === "income")})
        setTransaction([newTransaction.data.data,...transactions])
        setDescription("")
        setAmount("")
    }
    return (
        <>
        <h4>Add Transaction</h4>
        <form onSubmit={onSubmit}>
            <label>Category</label>
            <select value = {category} onChange = {
                (e) => {
                    setCategory(e.target.value);
                    if(e.target.value !== "other"){
                        setDescription("")
                    }
                } 
                }>
                <option value="Grocery">Grocery</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Salary">Salary</option>
                <option value="Gifts">Gifts</option>
                <option value="Other">Other</option>
                
            </select>
            <input type="text" style = {{display: category === "Other" ? "block" : "none"}}value = {description} onChange = {(e) => setDescription(e.target.value)} placeholder="Enter description (Optional)"></input>
            <label>Type</label>
            <select value = {type} onChange = {(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <label>Amount</label>
            <input type="number" value = {amount} onChange = {(e) => setAmount(e.target.value)}placeholder="Enter amount (Required)"></input>
            <button className='add' disabled = {category === "" || amount === ""}>Add Transaction</button>
        </form>
    </>
    )
}
