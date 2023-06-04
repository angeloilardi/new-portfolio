
"use client";
import Navbar from './components/Navbar';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import './page.css'

export default function Home() {
    
    return (
      <>
        <Navbar></Navbar>
        <div className="min-h-screen bg-blue-100 align-middle">
          <div className="flex w-lg sm:pt-16 flex-col-reverse md:flex md:flex-row-reverse items-center justify-around px-12">
            <div className="align-center px-16 mt-16">
              <h1 className="text-black text-5xl">
                HEY, I&apos;M ANGELO ILARDI
              </h1>
              <p className="mt-6 text-black text-2xl">
                I&apos;m a{" "}
                <span className="bg-pink-200">Front-End Developer </span>
                striving to build stunning Web creations that people love to use
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="/cat.png"
                alt="cat staring at a laptop"
                width={400}
                height={300}
                className="min-w-full"
              />
              <img
                id="fish"
                src="https://img.icons8.com/ios-glyphs/30/fish.png"
                alt="fish swimming inside the laptop screen"
                className="absolute top-2/4 right-1/4 rotate-12 w-5 h-5 max-w-full"
              />
            </div>
          </div>
        </div>
      </>
    );
}