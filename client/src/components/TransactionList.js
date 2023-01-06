import {useTransaction} from '../contexts/TransactionContext'
import { Transaction } from './Transaction';
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const TransactionList = () => {
  const {transactions,setTransaction} = useTransaction();
  const navigate = useNavigate()
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
      if(err.response.status === 401 || err.response.status === 403){
        navigate("/login")
      }
    }
   
  }
  const clearAll = async () => {
    try{
      await axios.delete("/api/v1/transactions/")
      setTransaction([])
    }
    catch(err){
      if(err.response.status === 401 || err.response.status === 403){
        navigate("/login")
      }
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
