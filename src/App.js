import Particles from "react-particles";
import React, { useEffect, useState} from "react";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";


function App() {
  const [newEfek, setEfek] = React.useState(["Wilson Christhoper", "Yang disakiti", "Yang Selalu Dipermainkan :)"]);
  const [newYearMessage, setNewYearMessage] = React.useState([
    "Bye 2023! Hope 2024 Will Be Better for me :)"
  ]);
  const [newMessage, setNewMessage] = React.useState([
    "Untuk diri sendiri aja deh :)"
  ]);
  const [newGombalan, setNewGombalan] = React.useState(["Sakit rasanya 2023 ini tidak dihargai :)"]);
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
          <Typewriter words={newMessage} cursorStyle={"_"} />
        </div>
        <span className="text-white text-2xl font-bold z-50">
          <Typewriter words={newGombalan} cursorStyle={"_"} />
        </span>
        <span className="text-white text-1xl font-bold px-10 z-50">
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
        <div className="z-50 text-white text-2xl">
          <h1>
            Developed By
            <span style={{ color: "yellow", marginLeft: "8px" }}>
              <Typewriter words={newEfek} loop={false} cursorStyle={"_"} cursor/>
            </span>
          </h1>
              
        </div>
      </div>
    </>
  );
}

export default App;
