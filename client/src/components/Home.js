import React from 'react'
import { TransactionProvider } from '../contexts/TransactionContext';
import {Budget} from './Budget';
import { Form } from './Form';
import {Header} from './Header'
import { Summary } from './Summary';
import { TransactionList } from './TransactionList';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()
  const logout = async () => {
    try{
      await axios.post('/api/v1/users/logout')
      localStorage.clear("isLoggedIn")
      navigate("/login")
    }
    catch(err){
      console.log(err.response.data.message)
    }
  }
  return (
   <>
   <TransactionProvider>
   <div className='wrapper'>
          <Header/>
          <Budget/>
          <Summary/>
          <TransactionList/>
          <Form></Form>
          <button onClick={logout}>Logout</button>
    </div>
    </TransactionProvider>
   </>
  )
}
