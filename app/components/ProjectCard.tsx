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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto md:flex md:h-max md:flex-row-reverse  md:min-h-fit md:w-8/12 md:max-w-3xl">
      <a href={url} className="basis-1/2 shrink-1 max-w-sm">
        <img className="rounded-t-lg min-h-60 object-cover" src={img} alt="" />
      </a>
      <div className="p-5 flex flex-col basis-1/2 shrink-1 max-w-sm justify-center">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray dark:text-white">
            {name.toUpperCase()}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-auto mb-2">
          <a
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View repository{" "}
            <i
              className="fa-brands fa-square-github ml-3 fa-xl"
              style={{ color: "#fcfcfc" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
