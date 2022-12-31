import '../styles/Summary.css'
import {useTransaction} from '../contexts/TransactionContext'

export const Summary = () => {
    const {transactions} = useTransaction();
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
            <p className="positive money">$
                {transactions.filter((t) => t.type).reduce((total,f) => +total + +f.amount,0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="negative money">$
                {transactions.filter((t) => !t.type).reduce((total,f) => +total + +f.amount,0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
            </div>
        </div>
    )
}
