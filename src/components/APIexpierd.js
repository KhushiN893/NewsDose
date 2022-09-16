import React from "react";
import vid from "./error.mp4";
function APIexpierd() {
  return (
    <div>
      <video
        style={{
          height: "75vh",
          width: "75vh",
          display: "block",
          margin: "auto",
        }}
        autoPlay
        loop
        muted
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

export default APIexpierd;
