import React from 'react'
import { TransactionProvider } from '../contexts/TransactionContext';
import {Budget} from './Budget';
import { Form } from './Form';
import {Header} from './Header'
import { Summary } from './Summary';
import { TransactionList } from './TransactionList';

export const Home = () => {
  return (
   <>
   <TransactionProvider>
    <Header></Header>
    <div className='all'>
      <div className='wrapper'>
              <Budget/>
              <Summary/>
              <TransactionList/>
              <Form></Form>
        </div>
    </div>
    </TransactionProvider>
   </>
  )
}
