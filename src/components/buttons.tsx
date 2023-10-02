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
      <button id="start" onClick={ startTimer } disabled={ isRunning }>
        Iniciar
      </button>
      <button id="pause" onClick={ pauseTimer } disabled={ !isRunning }>
        Pausar
      </button>
      <button id="reset" onClick={ resetTimer } disabled={ !isRunning }>
        Reiniciar
      </button>
    </div>
  );
}
