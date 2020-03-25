import React from "react";
import Details from "../../Details";

const Mixer = () => {
  return (
    <div>
      <p>MIXERmixerMIXERmixer</p>
      <object
        data={`https://mixer.com/embed/player/${Details.mixer}`}
        title="Mixer Embed"
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
