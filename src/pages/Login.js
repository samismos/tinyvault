import { useState } from "react";

function Login({ handlePageChange, showModal }) {

    const [currentPin, setCurrentPin] = useState('');

    const validPin = "1113";
    const maxPinLength = 4;

    const handleButtonPress = (digit) => {
        if (digit === -1) {
            setCurrentPin((prevPin) => prevPin.slice(0, -1));
        } else if (currentPin.length < maxPinLength) {
            setCurrentPin((prevPin) => prevPin + digit);
        }
    };

    const handleLogin = () => { 
        if( currentPin === validPin){
            showModal(2000, "Login successful!", 'success');
            setTimeout(() => {
                handlePageChange('hub');    
              }, 2000);
            
        }
        else{
            showModal(2000, "Incorrect pin. Please try again.", 'failure');
            setCurrentPin('');
        }
    }

    const paddedPin = currentPin.padEnd(maxPinLength, '*');

    return (
        <>
            <div className='action-page'>
                <h3 className='col-title'>Enter your pin</h3>

                <div className="pin-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    {paddedPin.split('').map((char, index) => (
                        <button key={index}>
                            {char}
                        </button>
                    ))}
                </div>


                <div className="keypad-container" style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'lightgreen'}}onClick={() => handleButtonPress(1)}>
                            1
                        </button>
                        <button style={{ backgroundColor: 'yellow'}} onClick={() => handleButtonPress(2)}>
                            2
                        </button>
                        <button style={{ backgroundColor: '#86A7FC'}} onClick={() => handleButtonPress(3)}>
                            3
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'orange'}} onClick={() => handleButtonPress(4)}>
                            4
                        </button>
                        <button style={{ backgroundColor: 'pink'}} onClick={() => handleButtonPress(5)}>
                            5
                        </button>
                        <button style={{ backgroundColor: 'brown'}} onClick={() => handleButtonPress(6)}>
                            6
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'violet'}} onClick={() => handleButtonPress(7)}>
                            7
                        </button>
                        <button style={{ backgroundColor: '#FF6C22'}} onClick={() => handleButtonPress(8)}>
                            8
                        </button>
                        <button style={{ backgroundColor: '#A1EEBD'}} onClick={() => handleButtonPress(9)}>
                            9
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: '#fe5c5c'}} onClick={() => handleButtonPress('*')}>
                            *
                        </button>
                        <button  onClick={() => handleButtonPress(0)}>
                            0
                        </button>
                        <button style={{ backgroundColor: 'red'}} onClick={() => handleButtonPress(-1)}>
                            X
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="back-button" onClick={handleLogin}>
                        Enter
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;