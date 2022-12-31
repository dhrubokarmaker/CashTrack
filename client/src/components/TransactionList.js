import {useTransaction} from '../contexts/TransactionContext'
import { Transaction } from './Transaction';
import { useEffect } from 'react';
import axios from 'axios'

export const TransactionList = () => {
  const {transactions,setTransaction} = useTransaction();
  const getData = async () => {
    const res = await axios.get('/api/v1/transactions/')
    setTransaction(res.data.data)
  }
  const clearAll = async () => {
    await axios.delete("/api/v1/transactions/")
    setTransaction([])
  }
  useEffect(() => {
    getData()
  },[])
  
  return (
    <>
    <h4>Transaction History</h4>
    <ul className='list'>
        {
        transactions.length > 0 ?
            <>
            {transactions.map((transaction) =>
                <Transaction key = {transaction._id} transaction = {transaction}></Transaction>
            )}
            <label style={{justifyContent:"right",color:"red", cursor:"pointer",marginBottom:0,textAlign:"right",marginTop:"2px"}} onClick={clearAll}> Clear All</label>
            </>
            : <label>No transactions to view</label>
        }
    </ul>
    </>
  )
}
