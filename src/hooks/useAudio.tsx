import { useEffect, useRef } from "react";

const useAudio = (url: string, options: { loop?: boolean } = {}) => {
  const audioRef = useRef(new Audio(url));

  useEffect(() => {
    if (options.loop) {
      audioRef.current.loop = true;
    }

    return () => {
      audioRef.current.pause();
    };
  }, [url, options.loop]);

  return audioRef.current;
};

export default useAudio;
