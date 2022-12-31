import React,{useState,useContext} from 'react'

const TransactionContext = React.createContext();
const UpdateTransactionContext = React.createContext();

export function useTransaction(){
    return useContext(TransactionContext);
}

export function useUpdateTransaction(){
    return useContext(UpdateTransactionContext);
}

export function TransactionProvider({children}) {
    const[transactions,setTransaction] = useState([
    ])
    const value = {
        transactions,
        setTransaction
    }
    return (
        <TransactionContext.Provider value = {value}>
            {children}
        </TransactionContext.Provider>
    )
}
