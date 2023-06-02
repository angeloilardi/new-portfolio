import Navbar from "../components/Navbar";
import TechStackIcon from "../components/TechStack";
import icons from "./../utils/stack.json";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-blue-200 min-h-screen py-12">
        <div className="flex flex-col-reverse md:flex-row align-middle">
          <div className="presentation basis-1/2 shrink-0 flex-row p-16">
            <p className="mb-3">
              Hey, I'm Angelo Ilardi, a Front-End Developer from London (UK).
            </p>
            <p className="mb-3">
              My biggest drive is my passion for creating eye-catching designs
              combined with a great usability.
            </p>
            <p className="mb-3">
              I love to be an early adopter and I'm never scared to try new
              things out. As a matter of fact, my approach to coding started as
              a game (I built a web page as a tribute to my favourite band).
            </p>
            <p className="mb-3">
              I'm a big fan of live music, art, tennis and Korean food.
            </p>
            <p className="mb-3">
              If you want to want to find out more about me, feel free to hit me
              up. All topics are wlcomed :)
            </p>
            <p>Or you can dowload my CV for any work-related queries.</p>
          </div>
          <div className="profile-pic basis-1/2 flex align-middle">
              <Image
                src="/profile.jpeg"
                width={300}
                height={300}
                alt="Picture of the author"
                style={{ transform: "rotate(3deg)", borderRadius: "5px", margin:"auto" }}
              />
          </div>
        </div>
        <div className="stack p-20">
          <h1 className="text-center pb-8">MY TECH STACK</h1>
          <div className="flex flex-row flex-wrap">
            {icons.map((icon) => {
              return (
                <TechStackIcon url={icon.url} name={icon.name}></TechStackIcon>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
