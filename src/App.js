import Particles from "react-particles";
import React, { useEffect, useState } from "react";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = React.useState([
    "Bye 2023! Hope 2024 Will Be Better",
  ]);
  const [newMessage, setNewMessage] = React.useState([
    "Hello Kristy Veronica👋",
  ]);
  const [newGombalan, setNewGombalan] = React.useState(["Hope You Like It😁"]);
  const [newMundur, setMundur] = React.useState(["👇Countdown to 2024👇"]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-5 font-bold">
        <div className="z-50 text-white font-bold text-4xl">
          <Typewriter words={newMessage} cursorStyle={"_"} cursor />
        </div>
        <span className="text-white text-2xl font-bold z-50">
          <Typewriter words={newGombalan} cursorStyle={"_"} cursor />
        </span>
        <span className="text-white text-2xl font-bold px-10 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50 text-white">
          <span className="text-white text-2xl z-50">
            <Typewriter words={newMundur} />
          </span>
        </div>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage(["Happy", "New", "Year", "HNY 2024"])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
