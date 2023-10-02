import { RefObject } from 'react';

type AudioProps = {
  audioRef: RefObject<HTMLAudioElement>,
};

function Audio({ audioRef }: AudioProps) {
  return (
    <audio ref={ audioRef } id="audio">
      <track kind="captions" />
      <source src="music/lu.mp3" type="audio/mpeg" />
    </audio>
  );
}

export default Audio;
