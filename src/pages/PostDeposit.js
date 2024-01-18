

function PostDeposit( {handlePageChange, lastDeposit } ) {
    
    return (
        <>
        <div className='action-page'>
            <h3 className='col-title'>You deposited</h3>
            <h1 className='col-title' style={{ fontSize: '80px', color:'#01eb63'}}>{lastDeposit}$</h1>
            <h3 className='col-title'>into your account</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="back-button" onClick={() => handlePageChange('hub')}>
                    ← Back
                    </button>
                </div>
        </div>
          </>
    );
}

export default PostDeposit;