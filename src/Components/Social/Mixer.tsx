import React from "react";
import { GlobalDetails } from "../../GlobalDetails";
import ReactMixerEmbed from "react-mixer-embed";

export const Mixer = () => {
  if (GlobalDetails.Mixer.string.length > 0) {
    return (
      <div className="social-div">
        <p>MIXERmixerMIXERmixer</p>
        <ReactMixerEmbed options={{ channel: GlobalDetails.Mixer.string }} />
        <button>
          <a
            href={`https://mixer.com/${GlobalDetails.Mixer.string}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {GlobalDetails.Mixer.string} on Mixer
          </a>
        </button>
      </div>
    );
  } else {
    return null;
  }
};
