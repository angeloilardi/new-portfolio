import Script from "next/script";

export default function Form() {
  return (
    <div className="mx-auto max-w-xl px-5">
      <div className="py-12">
        <h2 className="text-4xl outline-text text-blue-200 mb-6">
          GET IN TOUCH
        </h2>
        <p className="text-gray-700">
          For any inquiries about my work or if you think I might be a good fit
          for a role you&apos;re hiring for
        </p>
        <div className="mt-8 max-w-lg">
          <div className="grid grid-cols-1 gap-6">
            <form
              action="https://formsubmit.co/2b5a0c554cbe020fae0c799111bac22a"
              method="POST"
            >
              <label className="block">
                <span className="text-gray-700">Full name</span>
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
                    "
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
                      mt-1
                      block
                      w-full
                      rounded-md
                      border-gray-300
                      shadow-sm
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Your message</span>
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
                    "
                  rows={3}
                ></textarea>
              </label>
              <button
                className="rounded-full bg-black text-white p-2 mt-3"
                type="submit"
              >
                Send
              </button>
            </form>
            <div className="block"></div>
          </div>
          <p>
            You can also email me{" "}
            <a href="mailto:angeloilardi.dev@gmail.com">
              <i className="fa-regular fa-envelope fa-lg"></i>
            </a>{" "}
            or message me via{" "}
            <a
              href="https://www.linkedin.com/in/angelo-ilardi/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
