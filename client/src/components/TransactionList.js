import {useTransaction} from '../contexts/TransactionContext'
import { Transaction } from './Transaction';
import { useEffect } from 'react';
import axios from 'axios'

export const TransactionList = () => {
  const {transactions,setTransaction} = useTransaction();
  const clearLabel = {
    alignSelf:"flex-end",
    textAlign: "right",
    color:"#c0392b", cursor:"pointer",
    marginBottom:0,
    marginTop:"2px",
    width: "80px",
    fontWeight: "900"
  }
  const getData = async () => {
    try{
      const res = await axios.get('/api/v1/transactions/')
      setTransaction(res.data.data)
    }
    catch(err){
      console.log(err.message)
    }
   
  }
  const clearAll = async () => {
    try{
      await axios.delete("/api/v1/transactions/")
      setTransaction([])
    }
    catch(err){
    }
    
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
            <label style={clearLabel} onClick={clearAll}> Clear All</label>
            </>
            : <label>No transactions to view</label>
        }
    </ul>
    </>
  )
}
