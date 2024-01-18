import savings from '../assets/savings.gif';

function DepositPage( {handlePageChange, handleDeposit} ) {


    return (
        <>
        <div className='action-page'>
            <h3 className='col-title'>Please put your money</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
            <img src={savings} alt="GIF" 
            style={{
                width:'50%',
                //opacity: .7,
                borderRadius: '50px',
            }}/>
            </div>
            <h3 className='col-title'>in the slot with the green light.</h3>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop:'60px' }}>
                    
                    <button className="back-button" onClick={() => handlePageChange('hub')}>
                    ← Back
                    </button>
                    <button className="deposit-button" onClick={() => handleDeposit(10)}>
                    Confirm 10$ Deposit → 
                    </button>
                </div>
        </div>
          </>
    );
}

export default DepositPage;