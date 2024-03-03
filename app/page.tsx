"use client";

export default function Home() {
  return (
    <>
        <div className="flex w-lg sm:pt-16 flex-col-reverse md:flex md:flex-row-reverse items-center justify-around px-12">
          <div className="align-center px-16 mt-16 text-black dark:text-pink-200">
            <h1 className="text-5xl">HEY, I&apos;M ANGELO ILARDI</h1>
            <h2 className="mt-6 text-2xl mb-8">
              I&apos;m a{" "}
              <span className="bg-pink-200 dark:text-slate-600">
                Front-End Developer{" "}
              </span>
              striving to build stunning Web creations that people love to use
            </h2>
            <h3 className="text-lg">
              Let&apos;s connect{" "}
              <span>
                <a href="https://github.com/angeloilardi" target="_blank">
                  <i className="fa-brands fa-github fa-xl m-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/angelo-ilardi/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </span>{" "}
            </h3>
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
              className="absolute top-2/4 right-1/4 rotate-12 w-4 h-4 max-w-full"
            />
          </div>
        </div>
    </>
  );
}
