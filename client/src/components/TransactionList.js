import {useTransaction} from '../contexts/TransactionContext'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const {transactions,setTransaction} = useTransaction();
  return (
    <>
    <h4>Transaction History</h4>
    <ul className='list'>
        {
        transactions.length > 0 ?
            <>
            {transactions.map((transaction) =>
                <Transaction key = {transaction.id} transaction = {transaction}></Transaction>
            )}
            <label style={{justifyContent:"right",color:"red", cursor:"pointer",marginBottom:0,textAlign:"right",marginTop:"2px"}} onClick={() => setTransaction([])}> Clear All</label>
            </>
            : <label>No transactions to view</label>
        }
    </ul>
    </>
  )
}
