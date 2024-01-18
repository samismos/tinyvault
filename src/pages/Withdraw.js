import React, { useState } from 'react';
import '../App.css';
import withdrawal from '../assets/withdrawal.gif';

function WithdrawPage({ handlePageChange, handleWithdrawal }) {
    const withdrawalOptions = [1, 5, 10, 15];
    const [selectedAmount, setSelectedAmount] = useState();

    const isAmountValid = (amount) => {
        return amount > 0 ? true : false;
    }

    const handleButtonClick = (amount) => {
        setSelectedAmount(amount);
    }

    return (
        <div className='action-page'>
            <h2 className='col-title'>Withdraw</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <img src={withdrawal} alt="GIF"
                    style={{
                        width: '50%',
                        //opacity: .7,
                        filter: 'hue-rotate(20deg)',
                        borderRadius: '50px',
                    }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                <h2 className='col-title'>How much do you want?</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
                    {withdrawalOptions.map((amount) => (
                        <button className={`action-button ${selectedAmount === amount ? 'selected' : ''}`}
                            key={amount}
                            onClick={() => handleButtonClick(amount)}
                            aria-label={`Withdraw $${amount}`}>
                            ${amount}
                        </button>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className={`back-button`} onClick={() => handlePageChange('hub')}>
                        ← Back
                    </button>
                    <button className={`withdraw-button ${!isAmountValid(selectedAmount) ? 'disabled' : ''}`}
                        onClick={() => handleWithdrawal(selectedAmount)}
                        disabled={!isAmountValid(selectedAmount)}
                    >
                        Get ${selectedAmount} →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WithdrawPage;