import { useRef, useEffect } from "react";
import "./global.css";
import CircleType from "circletype";

import logo from "./assets/logo.png";
// import spin from "./assets/spin.svg";
import animation from "./assets/animation.svg";
import campfire from "./assets/campfire.svg";
import sun from "./assets/sun.svg";
import raft from "./assets/raft.svg";
import equilibria from "./assets/equilibria.svg";
import cardinal from "./assets/cardinal.svg";
import logoicon from "./assets/logo-icon.svg";

import Button from "./components/Button";

function App() {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(250);
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl px-10 pb-64">
      <div className="split-bckg relative flex justify-center -mx-10">
        <div className="absolute top-3 left-10">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <h1 className="split-h1">
            Are we on
            <br />
            the right path?
          </h1>
        </div>
        {/* <img src={spin} className="spin-hero" alt="logo"/> */}
        <div ref={circleInstance} className="rotating-text text-[#DCB012] mt-20 absolute">
            Republican • Democrat • Economy • Climate • Hunger • War • Democracy
            • Communism • God • Spirituality • Anger • Kindess • Right • Left •
            Education • Republican • Democrat • Economy • Climate • Hunger • War • Democracy
            • Communism • God • Spirituality • {" "}
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-light text-6xl text-black pb-12">
          If you feel the answer is no.
        </h1>
        <div className="w-4/5 ml-[10%]">
          <p className="text-2xl text-black ">
            PATH is an organization focused on ensuring our species walks the
            right way forward. We define the right path as what actions can we
            take that ensures the minimal amount of collective overall
            suffering.
          </p>
          <div className="pt-10 flex justify-end">
            <Button variant="black">Join our Discord</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          className="-mt-3"
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
        >
          <circle cx="45" cy="45" r="45" fill="#fdefbc" />
        </svg>
      </div>

      <div className="relative">
        <img src={animation} alt="" className="w-full" />
        <div className="w-1/2 mt-20 absolute top-[45%] left-[45%]">
          <h1 className="font-light text-6xl text-black pb-12">
            Some Context:
          </h1>
          <p className="text-2xl text-black ">
            In 2017 the Dalai Lama put out an appeal to the world. With the
            focus on developing something called secular ethics.
            <br />
            <br />
            Secular ethics can be defined as a reason to behave morally and
            ethically without a religious basis.
          </p>
        </div>
      </div>

      <div className="mt-40 ml-10 flex">
        <div>
          <h1 className="font-light text-6xl text-black pb-12">
            What are the problems?
          </h1>
          <p className="text-2xl text-black w-4/5">
            After a decade of research we have identified three areas that are
            necessary to improve in order to course correct and lessen our
            collective suffering.
            <br />
            <br />
            They are as follows:
          </p>
        </div>
        <img src={campfire} alt="" className="mt-14 w-3/4" />
      </div>

      <div className="mt-20">
        <p className="text-center text-2xl text-black">
          <b>A</b>bility to find happiness.
          <br />
          <b>C</b>ultural Incentive Structures.
          <br />
          <b>E</b>ducation for secular ethics.
        </p>
      </div>

      <div className="mt-40 flex justify-center">
        <p className="text-center text-2xl text-black w-3/4">
          It's a combination of these three problems that are leading to some of
          the largest aggregations of corrupt behaviour in history. Left
          unchecked these issues risk a real and legitimate possibility of
          resetting our current progress as a civilization. Here is our case for
          it.
        </p>
      </div>

      <div className="mt-10 ml-60">
        <img src={sun} alt="" className="w-24" />
      </div>

      <div className="mt-40 ml-10">
        <h1 className="font-light text-6xl text-black pb-12">
          So what are we doing?
        </h1>
        <p className="text-2xl text-black w-2/3">
          We are attempting to solve the above problems with a collection of
          software tools. You can learn more about each one below.
        </p>
      </div>

      <div className="mt-40 flex flex-col justify-center gap-40">
        <div className="flex flex-col text-center">
          <h1 className="font-light text-5xl text-black pb-4">
            Start With Self
          </h1>
          <p className="text-xl text-black">
            Happiness can be hard to find! We can help.
          </p>
          <div className="relative mt-12 flex justify-center gap-12">
            <Button variant="black">Support</Button>
            <Button variant="white">Learn More</Button>
            <img
              src={raft}
              alt=""
              className="absolute -top-8 right-[26%] w-[100px]"
            />
          </div>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="font-light text-5xl text-black pb-4">Equilibria</h1>
          <p className="text-xl text-black">
            Improve of systemic problem solving to offer a solution to our
            incentive issue in our world.
          </p>
          <div className="relative mt-12 flex justify-center gap-12">
            <Button variant="black">Support</Button>
            <Button variant="white">Learn More</Button>
            <img
              src={equilibria}
              alt=""
              className="absolute -top-8 right-[26%] w-[110px]"
            />
          </div>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="font-light text-5xl text-black pb-4">Cardinal</h1>
          <p className="text-xl text-black">
            A video game focused on the stories pertaining to secular ethics.
          </p>
          <div className="relative mt-12 flex justify-center gap-12">
            <Button variant="black">Support</Button>
            <Button variant="white">Learn More</Button>
            <img
              src={cardinal}
              alt=""
              className="absolute -top-10 right-[25%] w-[150px]"
            />
          </div>
        </div>

        <div className="flex flex-col text-center">
          <div className="flex justify-center items-center">
            <h1 className="font-light text-5xl text-black pb-4">PATH</h1>
            <img src={logoicon} alt="" className="w-[50px] -mt-4 ml-4" />
          </div>
          <p className="text-xl text-black">
            Organizing a community around including individuals who share this
            focus and want to help in any capacity they can.
          </p>
          <div className="mt-12 flex justify-center gap-12">
            <Button variant="black">Support</Button>
            <Button variant="white">Learn More</Button>
          </div>
        </div>
      </div>

      <div className="mt-60 flex flex-col">
        <h1 className="font-light text-5xl text-black flex justify-center">
          Why behave ethically if not for religion?
        </h1>
        <div className="mt-20 flex items-center justify-center px-44 gap-32">
          <p className="text-xl text-black">
            There has been plenty of times in history where we have not behaved
            ethically. When those times come we quickly realize that a world
            without ethics is a dark place.
            <br />
            <br />
            i.e A social cohesion tool, as well as a primary catalyzer for
            happiness.
          </p>
          <p className="text-xl text-black">
            We do not understand the larger effects of our actions. When you
            step off the path you simultaneously step on yourself. Becoming a
            person who is willing to cheat, however small. This should be the
            ultimate consideration.
          </p>
        </div>
      </div>

      <div className="mt-40 flex flex-col">
        <h1 className="font-light text-5xl text-black flex justify-center pb-20">
          Join the movement to move towards the right PATH:
        </h1>
        <p className="text-xl text-black flex justify-center">
          Join our discord.
          <br />
          <br />
          Advocate for this group and our solutions by sharing!
          <br />
          <br />
          Check out our reading list!
          <br />
          <br />
          Learn to develop. You can internship at our sister company Alteria!
          <br />
          <br />
          Help out on a project or create you're own project that we can add to
          our project list!
        </p>
      </div>
    </div>
  );
}

export default App;
