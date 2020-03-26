import React from "react";
import ReactMixerEmbed from "react-mixer-embed";
import GlobalDetails from "../../GlobalDetails";

const Mixer = () => {
  return (
    <div>
      <p>MIXERmixerMIXERmixer</p>
      <ReactMixerEmbed
        options={{
          channel: "ninja"
        }}
      />
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
};

export default Mixer;
