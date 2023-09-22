type ButtonsProps = {
  isRunning: boolean,
  startTimer: () => void,
  pauseTimer: () => void,
  resetTimer: () => void
};

export default function Buttons({ startTimer, pauseTimer,
  resetTimer, isRunning }: ButtonsProps) {
  return (
    <div id="buttons">
      <button onClick={ startTimer } disabled={ isRunning }>
        Iniciar
      </button>
      <button onClick={ pauseTimer } disabled={ !isRunning }>
        Pausar
      </button>
      <button onClick={ resetTimer } disabled={ isRunning }>
        Reiniciar
      </button>
    </div>
  );
}
