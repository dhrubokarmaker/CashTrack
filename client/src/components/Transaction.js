import '../styles/Transaction.css'
import {useTransaction} from '../contexts/TransactionContext'

export const Transaction = ({transaction}) => {
    const {transactions,setTransaction} = useTransaction();
    const deleteEntry = (id) => {
        setTransaction(transactions.filter((t) => t.id !== id ));
    };
  return (
    <li className= {transaction.type ? "transaction" : "transaction neg"}>
        <div className='title'>{transaction.text === "" ? transaction.category : transaction.text}</div>
        <span className='amount'>$ {(+transaction.amount).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
        <button className='delete' onClick = {() => deleteEntry(transaction.id)}>X</button>
    </li>
  )
}
