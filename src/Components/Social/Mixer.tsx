import React from "react";
import GlobalDetails from "../../GlobalDetails";
import ReactPlayer from "react-player";

const Mixer = () => {
  if (GlobalDetails.mixer.length > 0) {
    return (
      <div>
        <p>MIXERmixerMIXERmixer</p>
        <ReactPlayer url={`https://mixer.com/${GlobalDetails.mixer}`} />
        <button>
          <a
            href={`https://mixer.com/${GlobalDetails.mixer}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {GlobalDetails.mixer} on Mixer
          </a>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Mixer;
