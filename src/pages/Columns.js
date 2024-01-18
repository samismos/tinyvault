import '../App.css';
import deposit from '../assets/Deposit noBG.png'
import withdraw from '../assets/Withdraw noBG.png'
import balance from '../assets/Balance noBG.png'

function WithdrawColumn() {
  return (
    <>
      <div className='main-column withdraw' style={{ backgroundColor: 'rgb(188, 26, 26)' }}>
        <p className='col-title'>Withdraw</p>
        <img src={withdraw} alt='money withdrawal'></img>
        <p style={{ textAlign: 'center'}}><u>Take money</u> from my account</p>
      </div>
    </>
  );
}

function DepositColumn() {
  return (
    <>
      <div className='main-column deposit' style={{ backgroundColor: 'rgb(8, 3, 149)' }}>
        <p className='col-title'>Deposit</p>
        <img src={deposit} alt='money deposit'></img>
        <p style={{ textAlign: 'center'}}><u>Add money</u> to my account</p>
      </div>
    </>
  );
}

function ViewBalanceColumn() {
  return (
    <>
      <div className='main-column balance' style={{ backgroundColor: 'rgb(6, 172, 61)' }}>
        <p className='col-title'>Balance</p>
        <img src={balance} alt='wallet'></img>
        <p style={{ textAlign: 'center'}}><u>See how much money</u> is in my account</p>
      </div>
    </>
  );
}
export { WithdrawColumn, DepositColumn, ViewBalanceColumn };