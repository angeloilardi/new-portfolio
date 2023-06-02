
"use client";
import Navbar from './components/Navbar';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import IconsBar from './components/IconsBar';

import './page.css'

export default function Home() {
  function showAnimation({}) {
   return <IconsBar></IconsBar>
  }
    
    return (
      <>
        <Navbar></Navbar>
        <div className="min-h-screen bg-blue-100 align-middle">
          <div className="flex w-lg pt-16 flex-col md:flex md:flex-row-reverse items-center justify-around p-12">
            <Image
              src="/profile.jpeg"
              width={300}
              height={300}
              alt="Picture of the author"
              style={{ transform: "rotate(3deg)", borderRadius: "5px" }}
            />
            <div className="align-center px-16 mt-16">
              <h1 className="text-black text-5xl">HEY, I'M ANGELO ILARDI</h1>
              <p className="mt-6 text-black text-2xl">
                I'm a&nbsp;
                <RoughNotation
                  show={true}
                  type="highlight"
                  multiline={true}
                  padding={[1, 0]}
                  iterations={1}
                  color={"rgb(251 207 232)"}
                  strokeWidth={3}
                >
                  <span className="text-2xl">Front-End Developer</span>
                </RoughNotation>
                &nbsp;striving to build stunning Web creations that people love
                to use
              </p>
            </div>
          </div>
          <div className="relative max-w-md">
            <Image src="/cat.png" alt="" width={500} height={400}/>
            <img
              id='fish'
              width="24"
              height="24"
              src="https://img.icons8.com/ios-glyphs/30/fish.png"
              alt="fish"
              className='absolute top-40 right-28 rotate-12'
              
            />
            {/* <IconsBar></IconsBar> */}
          </div>
        </div>
      </>
    );
}