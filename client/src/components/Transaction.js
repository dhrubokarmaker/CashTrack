import '../styles/Transaction.css'
import {useTransaction} from '../contexts/TransactionContext'
import axios from 'axios';

export const Transaction = ({transaction}) => {
    const {transactions,setTransaction} = useTransaction();
    const deleteEntry = async (id) => {
        await axios.delete(`/api/v1/transactions/${id}`)
        setTransaction(transactions.filter((t) => t._id !== id ));
    };
  return (
    <li className= {transaction.type ? "transaction" : "transaction neg"}>
        <div className='title'>{transaction.description === "" ? transaction.category : transaction.description}</div>
        <span className='amount'>$ {(+transaction.amount).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
        <button className='delete' onClick = {() => deleteEntry(transaction._id)}>X</button>
    </li>
  )
}
