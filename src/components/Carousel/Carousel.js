import Cupcake from "../../../public/cupcake.png";
import Dev from "../../../public/dev.png";
import Music from "../../../public/music.png";
import { useState, useEffect, useRef } from "react";
import SlideElement from "./SlideElement";

// Animations
import * as utils from "../../utils/utils";
import animations from "@/styles/animatios.module.css";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const timer = useRef(null);
  const resetTimeOut = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  useEffect(() => {
    resetTimeOut();
    timer.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex == 2 ? 0 : prevIndex + 1)),
      5000
    );

    utils.addAnimationOne(ref, index, animations["animation-one"]);
    utils.addAnimationTwo(ref, index, animations["animation-two"]);
    return () => {
      resetTimeOut();
    };
  }, [index]);
  return (
    <div
      className="h-screen relative overflow-hidden after:absolute after:w-[calc(100vw*1.5)] after:h-full 
      after:bg-purple-900 after:inset-y-[calc(100vh-10px)] after:-inset-x-1/4 after:rotate-1"
    >
      <div
        ref={ref}
        className="flex flex-row whitespace-nowrap h-screen w-screen transition duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <SlideElement src={Cupcake} />
        <SlideElement src={Dev} />
        <SlideElement src={Music} />
      </div>
      <div className="absolute bottom-8 justify-center flex flex-row p-4 w-full space-x-6">
        <div
          className={`${
            index === 0 ? "bg-purple-900" : "bg-purple-200"
          } rounded-full h-4 w-4 cursor-pointer`}
          onClick={() => setIndex(0)}
        ></div>
        <div
          className={`${
            index === 1 ? "bg-purple-900" : "bg-purple-200"
          } rounded-full h-4 w-4 cursor-pointer`}
          onClick={() => setIndex(1)}
        ></div>
        <div
          className={`${
            index === 2 ? "bg-purple-900" : "bg-purple-200"
          } rounded-full h-4 w-4 cursor-pointer`}
          onClick={() => setIndex(2)}
        ></div>
      </div>
    </div>
  );
}
