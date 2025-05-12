import Image from "next/image";

export default function ProjectCard({
  img,
  url,
  name,
  description,
  gh,
}: {
  img: string;
  url: string;
  name: string;
  description: string;
  gh: string;
}) {
  return (
    <div className="max-w-sm bg-white border-4 border-pink-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto md:flex md:flex-row-reverse  md:h-[250px] md:w-10/12 md:max-w-2xl hover:shadow-md dark:hover:border-gray-900 hover:border-pink-300 overflow-auto scale-50 opacity-30 intersect:scale-100 intersect:opacity-100 transition duration-700">
      <div className="basis-1/2">
        <a href={url} target="_blank" className="h-full block">
          <Image
            className="hover:opacity-80 aspect-auto hover:object-cover object-contain h-full"
            src={img}
            alt={`Preview of ${name}`}
            width={400}
            height={350}
          />
        </a>
      </div>
      <div className="p-5 flex flex-col basis-1/2 shrink-1 max-w-sm justify-center">
        <a href={url} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-300 dark:text-pink-200">
            {name.toUpperCase()}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-auto mb-2">
          <a
            href={url}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-pink-300 dark:hover:bg-pink-400 dark:text-slate-600 dark:focus:ring-blue-800"
          >
            Visit Website
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="">
          <a
            href={gh}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-pink-300 dark:hover:bg-pink-400 dark:text-slate-600 dark:focus:ring-blue-800"
          >
            View repository{" "}
            <i
              className="fa-brands fa-square-github ml-3 fa-xl"

              // style={{ color: "#fcfcfc" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
