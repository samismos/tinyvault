

function PostWithdraw( {handlePageChange, currentAmount } ) {

    var textColor;
    if(currentAmount <= 10){
        textColor = 'red'
    }
    else if(currentAmount > 10 && currentAmount <= 20){
        textColor = 'yellow'
    }
    else textColor = '#01eb63';
    
    return (
        <>
        <div className='action-page'>
            <h3 className='col-title'>You withdrew</h3>
            <h1 className='col-title' style={{ fontSize: '80px', color: '#01eb63'}}>{currentAmount}$</h1>
            <h3 className='col-title'>from your account</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="back-button" onClick={() => handlePageChange('hub')}>
                    ← Back
                    </button>
                </div>
        </div>
          </>
    );
}

export default PostWithdraw;