import { Link } from "react-router-dom";

function WelcomePrompt({ logo }) {
  return (
    <section className="welcome_upper">
      <h1 className="welcome_upper_logo">{logo}</h1>
    </section>
  );
}

function Block({ block }) {
  return (
    <div className="block">
      <h1>{block}</h1>
    </div>
  );
}

function WelcomeIntroFirst() {
  return (
    <div className="welcome_lower_first">
      <Block block={"first"} />
      <Block block={"second"} />
    </div>
  );
}
function WelcomeIntroSecond() {
  return (
    <div className="welcome_lower_second">
      <Block block={"third"} />
      <Block block={"forth"} />
      <Block block={"fifth"} />
      <Link className="welcome_home-link" to="/home"></Link>
    </div>
  );
}

function WelcomeIntro() {
  return (
    <section className="welcome_lower">
      <WelcomeIntroFirst />
      <WelcomeIntroSecond />
    </section>
  );
}

function NextButton() {
  function scrollDown() {
    console.log("scroll down");
  }
  return <button className="welcome_scroll-down" onClick={scrollDown}></button>;
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
