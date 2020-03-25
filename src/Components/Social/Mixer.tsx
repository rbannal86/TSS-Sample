import React from "react";
import ReactMixerEmbed from "react-mixer-embed";
import Details from "../../Details";

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
          href={`https://mixer.com/${Details.mixer}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {Details.mixer} on Mixer
        </a>
      </button>
    </div>
  );
};

export default Mixer;
