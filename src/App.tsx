import { useState } from 'react';
import Timer from './components/timer';
import Buttons from './components/buttons';
import { TimeType } from './utils/types';
import INNITIAL_STATE from './utils/INNITIAL_STATE';
import './App.css';

function App() {
  const [time, setTime] = useState<TimeType>(INNITIAL_STATE);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(INNITIAL_STATE);
    setTime(INNITIAL_STATE);
  };

  return (
    <>
      <p>Digite um valor</p>
      <Timer
        time={ time }
        setTime={ setTime }
        isRunning={ isRunning }
        setIsRunning={ setIsRunning }
      />
      <Buttons
        isRunning={ isRunning }
        startTimer={ startTimer }
        pauseTimer={ pauseTimer }
        resetTimer={ resetTimer }
      />
    </>
  );
}

export default App;
