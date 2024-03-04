import TechStackIcon from "../components/TechStack";
import icons from "./../utils/stack.json";
import Image from "next/image";
import "./../globals.css";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row align-middle">
        <div className="presentation basis-1/2 shrink-0 flex-row p-16 text-black dark:text-pink-200">
          <h1 className="outline-text text-blue-200 mb-6 text-4xl dark:text-slate-500 dark:font-bold">
            ABOUT ME
          </h1>
          <p className="mb-3">
            Hey, I&apos;m Angelo Ilardi, a Front-End Developer from London (UK).
          </p>
          <p className="mb-3">
            My biggest drive is my passion for creating eye-catching designs
            combined with a great usability.
          </p>
          <p className="mb-3">
            I love to be an early adopter and I&apos;m never scared to try new
            things out. As a matter of fact, my approach to coding started as a
            game (I built a web page as a tribute to my favourite band just for
            fun).
          </p>
          <p className="mb-3">
            I&apos;m a big fan of live music, art, tennis and Korean food.
          </p>
          <p className="mb-3">
            If you are a fellow developer and you have a project you would like
            to talk about, feel free to hit me up. All topics are welcomed!
          </p>
          <p>
            Or you can{" "}
            <a
              href="https://drive.google.com/file/d/1W6Avmv6KtusmxPkqF17dXLk4qUkKBjTP/view?usp=sharing"
              target="_blank"
            >
              <u>dowload my CV</u>
            </a>{" "}
            if you are a looking for an enthusiastic developer to join your
            team.
          </p>
        </div>
        <div className="profile-pic basis-1/2 flex align-middle">
          <Image
            src="/profile.jpeg"
            width={300}
            height={300}
            alt="Picture of the author"
            style={{
              transform: "rotate(3deg)",
              borderRadius: "5px",
              margin: "auto",
            }}
          />
        </div>
      </div>
      <div className="stack ">
        <h1 className="text-center pb-8 outline-text text-white text-2xl">
          MY TECH STACK
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          {icons.map((icon) => {
            return (
              <TechStackIcon
                url={icon.url}
                name={icon.name}
                key={icon.name}
              ></TechStackIcon>
            );
          })}
        </div>
      </div>
    </>
  );
}
