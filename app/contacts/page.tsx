import Form from "../components/ContactForm";

export default function Contacts() {
  return (
    <>
      <div className="mx-auto px-5">
        <div className="py-12 w-full text-gray-700 dark:text-pink-200 md:flex md:gap-6">
          <div>
            <div className="relative overflow-hidden">
              <h2 className="text-4xl outline-text text-blue-200 mb-6 dark:text-slate-400 dark:font-bold py-16">
                GET IN TOUCH
              </h2>
              <div className="bg-text">
                GET IN TOUCH
              </div>
            </div>
            <p className="">
              For any inquiries about my work or if you think I might be a good
              fit for a role you&apos;re hiring for
            </p>
            <p className=" mt-3">
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
          <Form></Form>
        </div>
      </div>
    </>
  );
}
