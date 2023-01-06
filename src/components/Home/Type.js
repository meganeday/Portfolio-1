import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Software Engineer",
          "Cat Mom",
          "Salesforce B2C Commerce Developer",
          "Professional Googler",
          "Figma Aficionado",
          "Rabbit Hole Voyager",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
