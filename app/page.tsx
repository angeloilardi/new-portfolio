"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      contentType: "html",
      fadeOut: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex w-full flex-col-reverse  md:flex-row-reverse items-center justify-center bg-[url('/wave-haikei.svg')] bg-no-repeat  bg-cover h-[calc(100vh-64px)] gap-6">
        <h1 className="mix-blend-difference">Angelo ilardi</h1>
        <div className="flex w-[300px] sm:w-[400px] md:w-[600px] relative">
          <img
            src="/9306518_45999.svg"
            className="relative top-0 left-0 w-full"
          />
          <div className="hidden text-2xl md:text-xl" id="typed-strings">
            <h1 className="text-5xl">{`HEY, I'M ANGELO ILARDI`}</h1>
            <br />
            <h2 className="mt-6 text-2xl mb-8">
              I&apos;m a{" "}
              <span className="bg-white dark:text-slate-600">
                Frontend Developer{" "}
              </span>
              striving to build stunning Web creations that people love to use
            </h2>
            <h3 className="text-lg">
              Let&apos;s connect{" "}
              <span className="text-center">
                <a href="https://github.com/angeloilardi" target="_blank">
                  <i className="fa-brands fa-github fa-xl m-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/angelo-ilardi/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </span>
            </h3>
          </div>
          <div className="bg-pink-200 w-[80%] absolute left-[10%] top-[5%] rounded-md aspect-[16/11] overflow-hidden flex items-center max-w-[480px] z-10">
            <div className="text-lg p-4 sm:text-2xl md:text-4xl text-black">
              <span ref={el}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
