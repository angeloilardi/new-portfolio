export default function Form() {
    return (
      <div className="mx-auto max-w-xl px-5">
        <div className="py-12">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="text-gray-700">
            For any inquiries about my work or if you think I might be a good
            fit for a role you&apos;re hiring for
          </p>
          <div className="mt-8 max-w-lg">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
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
              <div className="block"></div>
            </div>
          </div>
        </div>
      </div>
    );
}