export default function Form() {
  return (
    <div className="mt-8 basis-1/2">
      <p className=" pb-6 font-bold text-xl">Contact Form</p>
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
              placeholder=""
              minLength={1}
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
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
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
            <p className="peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden italic text-xs mt-1 text-red-600">
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
                    dark:bg-slate-600 dark:border-pink-200 peer"
              rows={3}
              required
              minLength={50}
              placeholder=""
            />
            <p className="peer-[&:not(:placeholder-shown):not(:focus):invalid]:block hidden italic text-xs mt-1 text-red-600">
              50 characters minimum
            </p>
          </label>
        </div>
        <button
          className="rounded-full bg-blue-500 text-white px-3 py-2 mt-3 dark:bg-slate-600 dark:hover:bg-slate-700 group-invalid:pointer-events-none group-invalid:bg-blue-300"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="block"></div>
    </div>
  );
}
