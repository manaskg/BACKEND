import { useContext, useEffect, useRef, useState } from "react";
import { SongContext } from "../song.context";
import "../style/player.scss";

const Player = () => {
  const { song } = useContext(SongContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [song?.url]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const seek = (seconds) => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      audio.duration || 0,
    );
  };

  const handleProgressChange = (event) => {
    const nextTime = Number(event.target.value);
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value);
    audioRef.current.volume = nextVolume;
    setIsMuted(nextVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  if (!song) return null;

  return (
    <section className="player" aria-label="Music player">
      <audio
        ref={audioRef}
        src={song.url}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="player__song">
        <img
          className="player__artwork"
          src={song.posterUrl}
          alt={`${song.title} artwork`}
        />
        <div className="player__details">
          <p className="player__eyebrow">Now playing</p>
          <h2>{song.title}</h2>
          <span>{song.mood}</span>
        </div>
      </div>

      <div className="player__controls">
        <div className="player__transport">
          <button
            type="button"
            onClick={() => seek(-10)}
            aria-label="Skip back 10 seconds"
          >
            -10
          </button>
          <button
            className="player__play"
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "||" : ">"}
          </button>
          <button
            type="button"
            onClick={() => seek(10)}
            aria-label="Skip forward 10 seconds"
          >
            +10
          </button>
        </div>

        <div className="player__timeline">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={handleProgressChange}
            aria-label="Song progress"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player__volume">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "Mute" : "Sound"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          defaultValue="1"
          onChange={handleVolumeChange}
          aria-label="Volume"
        />
      </div>
    </section>
  );
};

export default Player;
