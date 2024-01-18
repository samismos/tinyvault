import vault from '../assets/vault.png';
import '../App.css';

function Welcome( { handlePageChange }) {
    
    return (
        <>
        <div className='action-page'>
            <h3 className='col-title'>Welcome to vault-n-bolt</h3>
            <img src={vault} style={{
                width:'50%',
                borderRadius: '50px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}></img>
            <h3 className='col-subtitle'>Put your card in the slot to get started</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="back-button" onClick={() => handlePageChange('login')}>
                        Log in
                    </button>
                </div>
        </div>
          </>
    );
}

export default Welcome;