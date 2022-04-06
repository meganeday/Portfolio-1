import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Developer",
          "Cat Mom",
          "Salesforce Commerce Cloud Developer",
          "Professional Googler",
          "Frontend Web Designer",
          "Rabbit Hole Voyager",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
