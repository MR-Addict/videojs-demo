import videojs, { VideoJsPlayerOptions } from "video.js";
import { useEffect, useRef } from "react";

import "video.js/dist/video-js.css";
import "./custom.css";

const initialOptions: VideoJsPlayerOptions = {
  autoplay: false,
  bigPlayButton: true,
  controls: true,
  fluid: true,
  loop: false,
  playbackRates: [0.75, 1, 1.25, 1.5, 2, 3],
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

export default function VideoPlayer({ options }: { options: VideoJsPlayerOptions }) {
  const player = useRef<videojs.Player>();
  const videoNode = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, { ...initialOptions, ...options }).ready(() => {});
    }

    return () => {
      if (player.current) player.current.dispose();
    };
  }, [options]);

  return <video ref={videoNode} className='video-js' />;
}
