import React from "react";
import { Link } from "react-router-dom";

function WelcomePrompt({ logo }) {
  return (
    <section>
      <h1>{logo}</h1>
    </section>
  );
}

function WelcomeIntroFirst() {
  return (
    <div>
      <p>first part</p>
    </div>
  );
}
function WelcomeIntroSecond() {
  return (
    <div>
      <p>second part</p>
      <Link to="/home">&gt;</Link>
    </div>
  );
}

function WelcomeIntro() {
  return (
    <section>
      <WelcomeIntroFirst />
      <WelcomeIntroSecond />
    </section>
  );
}

function NextButton() {
  function scrollDown() {
    console.log("scroll down");
  }
  return <button onClick={scrollDown}>&gt;</button>;
}

function WelcomeScreen() {
  return (
    <main className="App-welcome">
      <WelcomePrompt logo={"START"} />
      <NextButton />
      <WelcomeIntro />
    </main>
  );
}

export default WelcomeScreen;
