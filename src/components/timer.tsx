import { useEffect, useRef } from 'react';
import { TimeType } from '../utils/types';
import Audio from './audio';

type TimerProps = {
  time: TimeType,
  setTime: (param: TimeType | ((prevState: TimeType) => TimeType)) => void | TimeType,
  isRunning: boolean,
  setIsRunning: (param: boolean) => void,
};

export default function Timer({ time, setTime, isRunning, setIsRunning }: TimerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const nValue = Number(value);

    if (!Number.isNaN(nValue) && nValue >= 0 && nValue <= 59) {
      setTime({ ...time, [name]: nValue });
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        if (time.minutes === 0 && time.seconds === 0) {
          playAudio();
          setIsRunning(false);
        } else if (time.seconds === 0) {
          setTime({ ...time, minutes: time.minutes - 1 });
          setTime((prevState) => ({ ...prevState, seconds: 59 }));
        } else {
          setTime({ ...time, seconds: time.seconds - 1 });
        }
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    isRunning,
    time.seconds,
    time.minutes,
    time,
    setTime,
    setIsRunning,
  ]);

  return (
    <div id="timer">
      <input
        type="number"
        value={ time.minutes < 10 ? `0${time.minutes}` : time.minutes }
        name="minutes"
        min={ 0 }
        max={ 60 }
        maxLength={ 2 }
        onChange={ handleChange }
        readOnly={ isRunning }
      />
      <span>:</span>
      <input
        type="number"
        value={ time.seconds < 10 ? `0${time.seconds}` : time.seconds }
        name="seconds"
        min={ 0 }
        max={ 59 }
        maxLength={ 2 }
        onChange={ handleChange }
        readOnly={ isRunning }
      />
      <Audio audioRef={ audioRef } />
    </div>
  );
}
