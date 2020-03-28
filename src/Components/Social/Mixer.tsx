import React from "react";
import GlobalDetails from "../../GlobalDetails";
import ReactMixerEmbed from "react-mixer-embed";

export const Mixer = () => {
  if (GlobalDetails.Mixer.length > 0) {
    return (
      <div className="social-div">
        <p>MIXERmixerMIXERmixer</p>
        <ReactMixerEmbed options={{ channel: GlobalDetails.Mixer }} />
        <button>
          <a
            href={`https://mixer.com/${GlobalDetails.Mixer}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {GlobalDetails.Mixer} on Mixer
          </a>
        </button>
      </div>
    );
  } else {
    return null;
  }
};
