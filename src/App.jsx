import { useState } from 'react';

import Info from './components/Info';
import Button from './components/Button';

function App() {

    const [secretNumber, setSecretNumber] = useState( Math.trunc( Math.random() * 100 ) + 1);
    const secretNumberInfo = secretNumber + ' is the secret number';
  
    function handleNewGame() {
          setSecretNumber( Math.trunc( Math.random() * 100 ) + 1); 
      }
     
    return  (
      <>
        <Info message={secretNumberInfo} />
        <Button type='button' handleOnClick={handleNewGame}>New Game</Button>
      </>  
    );
  }
  
  export default App;
