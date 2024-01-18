import logo from './logo.svg';
import './App.css';
import { WithdrawColumn, DepositColumn, ViewBalanceColumn } from './pages/Columns';
import WithdrawPage from './pages/Withdraw';
import { useEffect, useState } from 'react';
import DepositPage from './pages/Deposit';
import BalancePage from './pages/Balance';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import PostDeposit from './pages/PostDeposit';
import PostWithdraw from './pages/PostWithdraw';
import checkbox from './assets/checkbox.png';
import x_mark from './assets/x-mark.png';

function TopLogo({isLoggedIn , handlePageChange}) {
  
  const logout = () => {
    handlePageChange('welcome')
  }

  return (
    (
      <div className="App">
        <header className="App-header">
          {isLoggedIn && (
            <div style={{ backgroundColor: 'red', borderRadius: '10px', paddingLeft: '10px', paddingRight: '10px', cursor:'pointer' }} onClick={logout}>
              <p>PRESS HERE TO EXIT</p>
            </div>
          )}
        </header>
      </div>
    )
  );
}

function Home() {

  const [currentPage, setCurrentPage] = useState('welcome');
  const [currentAmount, setCurrentAmount] = useState(30);
  const [lastWithdrawal, setLastWithdrawal] = useState(0);
  const [lastDeposit, setLastDeposit] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalIcon, setModalIcon] = useState({});
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePageChange = (page) => {
    setIsModalVisible(false);
    setCurrentPage(page);
    blurBackground(false);

    if(page === 'welcome') setIsLoggedIn(false);
    if(page === 'hub') setIsLoggedIn(true);
  }

  const blurBackground = (isActive) => {
    isActive ? document.getElementById('atm-container').classList.add('blur') : document.getElementById('atm-container').classList.remove('blur');
  }

  const showModal = (timeout, content, type) => {
    setIsModalVisible(true);
    setModalContent(content);
    type === 'success' ? setModalIcon(checkbox) : setModalIcon(x_mark);
    blurBackground(true);
    if (type === 'redirect') {
      setIsModalConfirm(true);
    }

    setTimeout(() => {
      setIsModalVisible(false);
      blurBackground(false);
    }, timeout);
  }

  const handleWithdrawal = (amount) => {
    if ((currentAmount - amount) >= 0) {
      setCurrentAmount(currentAmount - amount);
      setLastWithdrawal(amount);
      setCurrentPage('post-withdraw');
    }
    else {
      showModal(3000, "Oops! You don't have enough money to do that.", 'redirect');
    }
  }

  const handleDeposit = (amount) => {
    setCurrentAmount(currentAmount + amount);
    setLastDeposit(amount);
    setCurrentPage('post-deposit')
  }

  return (
    <>
    <TopLogo isLoggedIn={isLoggedIn} handlePageChange={handlePageChange}/>
      <div id='atm-container'>
        {currentPage === 'welcome' && (
          <Welcome handlePageChange={handlePageChange} />
        )}

        {currentPage === 'login' && (
          <Login handlePageChange={handlePageChange} showModal={showModal} setIsLoggedIn={setIsLoggedIn} />
        )}

        {currentPage === 'hub' && (
          <div className='atm'>
            <div className='hub-column' onClick={() => handlePageChange('withdraw')}>
              <WithdrawColumn />
            </div>
            <div className='hub-column' onClick={() => handlePageChange('deposit')}>
              <DepositColumn />
            </div>
            <div className='hub-column' onClick={() => handlePageChange('balance')}>
              <ViewBalanceColumn />
            </div>
          </div>
        )}

        {currentPage === 'withdraw' && (
          <WithdrawPage handlePageChange={handlePageChange} handleWithdrawal={handleWithdrawal} />
        )}
        {currentPage === 'post-withdraw' && (
          <PostWithdraw handlePageChange={handlePageChange} currentAmount={lastWithdrawal} />
        )}
        {currentPage === 'deposit' && (
          <DepositPage handlePageChange={handlePageChange} handleDeposit={handleDeposit} />
        )}
        {currentPage === 'post-deposit' && (
          <PostDeposit handlePageChange={handlePageChange} lastDeposit={lastDeposit} />
        )}
        {currentPage === 'balance' && (
          <BalancePage handlePageChange={handlePageChange} currentAmount={currentAmount} />
        )}
      </div>
      {isModalVisible && (
        <div className='modal visible'>
          <p className='modal-content'>{modalContent}</p>
          <img src={modalIcon} style={{ marginBottom: '30px' }} />
          {isModalConfirm && <button className='back-button' onClick={() => handlePageChange('balance')}>View balance</button>}
        </div>
      )}
    </>
  );
}

export { TopLogo, Home };


