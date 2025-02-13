import { useState, useRef } from 'react';

import Info from './components/Info';
import Button from './components/Button';
import Input from './components/Input';

function App() {

    const [secretNumber, setSecretNumber] = useState( Math.trunc( Math.random() * 100 ) + 1 );
    const [guess, setGuess] = useState('');
    const inputRef = useRef(null);
    const secretNumberInfo = guess === '' ? 'Guess the number' : secretNumber === Number(guess) ? 'Yes-' + secretNumber : 'No-' + secretNumber;

    function handleGuess(){
      setGuess(inputRef.current.value);  
    }
  
    function handleNewGame() {
      setSecretNumber( Math.trunc( Math.random() * 100 ) + 1 );
      inputRef.current.value = null;
      setGuess(''); 
    }
     
    return  (
      <>
        <Info message={secretNumberInfo} />
        <Input innerRef={inputRef}/>
        <Button type='button' handleOnClick={handleGuess}>Check</Button>
        <Button type='button' handleOnClick={handleNewGame}>New Game</Button>
      </>  
    );
  }
  
  export default App;
