export default function Form() {
  return (
    <div className="mx-auto max-w-xl px-5">
      <div className="py-12 text-gray-700 dark:text-pink-200">
        <h2 className="text-4xl outline-text text-blue-200 mb-6 dark:text-slate-400 dark:font-bold">
          GET IN TOUCH
        </h2>
        <p className="">
          For any inquiries about my work or if you think I might be a good fit
          for a role you&apos;re hiring for
        </p>
        <div className="mt-8 max-w-lg">
          <form
            action="https://formsubmit.co/2b5a0c554cbe020fae0c799111bac22a"
            method="POST"
            className="text-black dark:text-pink-200 group"
          >
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="">Full name</span>
                <input
                  name="name"
                  type="text"
                  className="
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    dark:bg-slate-600 dark:border-pink-200"
                  placeholder=" "
                  required
                />
                <p className="peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden italic text-xs mt-1">
                  Please enter your name
                </p>
              </label>
              <label className="block">
                <span className="">Email address</span>
                <input
                  name="email"
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  className="
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    dark:bg-slate-600 dark:border-pink-200 peer"
                  placeholder=" "
                  required
                />
                <p className="peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden italic text-xs mt-1">
                  Please enter a valid email address
                </p>
              </label>
              <label className="block">
                <span className="">Your message</span>
                <textarea
                  name="message"
                  className="
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    dark:bg-slate-600 dark:border-pink-200"
                  rows={3}
                  required
                ></textarea>
              </label>
            </div>
            <button
              className="rounded-full bg-blue-500 text-white px-3 py-2 mt-3 hover:bg-blue-400 dark:bg-slate-600 dark:hover:bg-slate-700"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="block"></div>
        </div>
        <p className=" mt-3">
          You can also email me{" "}
          <a href="mailto:angeloilardi.dev@gmail.com">
            <i className="fa-regular fa-envelope fa-lg"></i>
          </a>{" "}
          or message me via{" "}
          <a href="https://www.linkedin.com/in/angelo-ilardi/" target="_blank">
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
