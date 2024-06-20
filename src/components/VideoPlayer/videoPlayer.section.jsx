import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

import { VideoPlayeContaner } from "./videoPlayer.styles";

export const VideoPlayer = () => {
  const [videoURL /*setVideoURL*/] = useState();

  return (
    <React.Fragment>
      <VideoPlayeContaner>
        <ReactPlayer
          url={
            videoURL
              ? videoURL
              : "https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/b55d73d8-9c2f-43dd-a797-64415b3cba3e/transcode/a2fc5b65-ea16-4d67-b0ab-e8793e4e8f1a/720x1280_PROGRESSIVE_909.mp4"
          }
          height={"100%"}
          width={"100%"}
          playing={true}
          // muted={mute}
          // ref={playerRef}
          // player={videoRef.current}
          // onReady={handleBegin}
          style={{
            // border: `10px solid ${colors.primary}`,
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        />
      </VideoPlayeContaner>
    </React.Fragment>
  );
};
