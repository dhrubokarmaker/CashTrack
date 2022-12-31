import {useTransaction} from '../contexts/TransactionContext'

export const Budget = () => {
  const {transactions} = useTransaction();
    let sum = 0;
    for(let t of transactions){
        if(t.type){
            sum = +sum + +t.amount
        }
        else{
            sum = +sum - +t.amount
        }
    }
  return (
    <>
    <div className='container'>
    <h4>Balance</h4>
    {sum>= 0 ? <h1>${sum.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</h1> :<h1 className='negative'>${sum.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}</h1>}
    </div>
    </>
  )
}
