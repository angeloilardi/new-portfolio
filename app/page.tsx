
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
          <div className="flex w-lg pt-16 flex-col md:flex md:flex-row-reverse items-center justify-around p-12">
            <div className="align-center px-16 mt-16">
              <h1 className="text-black text-5xl">HEY, I'M ANGELO ILARDI</h1>
              <p className="mt-6 text-black text-2xl">
                I'm a
                <RoughNotation
                  show={true}
                  type="highlight"
                  multiline={true}
                  padding={[1, 0]}
                  iterations={1}
                  color={"rgb(251 207 232)"}
                  strokeWidth={3}
                >
                  <span className="text-2xl"> Front-End Developer</span>
                </RoughNotation>
                striving to build stunning Web creations that people love
                to use
              </p>
            </div>
            <div className="relative shrink-0">
              <Image src="/cat.png" alt="" width={350} height={300} />
              <img
                id="fish"
                width="24"
                height="24"
                src="https://img.icons8.com/ios-glyphs/30/fish.png"
                alt="fish"
                className="absolute top-32 right-28 rotate-12"
              />
            </div>
          </div>
        </div>
      </>
    );
}