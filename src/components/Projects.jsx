import React from 'react';

const projects = [
  {
    title: "#1",
    description: "One of a lot of features is that's free forever. You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite.",
    imageUrl: "https://images.unsplash.com/photo-1520687052856-eb38da98adeb?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "#2",
    description: "One of a lot of features is that's free forever. You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite.",
    imageUrl: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=2713&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "#3",
    description: "One of a lot of features is that's free forever. You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite.",
    imageUrl: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-24 dark:bg-gray-800">
      <div className="w-full md:w-3/5 mx-auto flex flex-col md:flex-row">
        <div className="w-full relative md:w-1/2 items-center h-auto md:py-12 flex">
          {/* Background Image for the left section */}
          <div
            className="absolute z-30 bg-gray-300 w-[85%] h-[70%] right-0 bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
          >
            &nbsp;
          </div>
          <div className="relative left-0 z-20 bg-gray-800 dark:bg-gray-600 w-[90%] min-h-64">
            <div className="relative w-[12%] min-h-64 [writing-mode:vertical-lr] text-2xl rotate-180 text-white dark:text-gray-800 py-20 text-center">
              OUR SHOWCASE
            </div>
          </div>
        </div>
        <div className="w-full relative md:w-1/2 justify-items-center h-auto md:py-8 pl-6 flex flex-col my-auto">
          <div className="flex flex-row md:!flex-col mt-4 md:!mt-0">
            <div className="w-1/12">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                className="md:mb-4 max-h-8 max-w-8 text-gray-400 mt-2 md:!mt-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <defs>
                  <style>
                    {`.cls-637b7068f95e86b59c579e0f-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}
                  </style>
                </defs>
                <path
                  className="cls-637b7068f95e86b59c579e0f-1"
                  d="M11,18.68h5.73a3.82,3.82,0,0,1,3.82,3.82v0a0,0,0,0,1,0,0H7.23a0,0,0,0,1,0,0v0A3.82,3.82,0,0,1,11,18.68Z"
                />
                <path
                  className="cls-637b7068f95e86b59c579e0f-1"
                  d="M16.77,18.68V5.32A3.82,3.82,0,0,0,13,1.5H12A3.82,3.82,0,0,0,8.18,5.32h0"
                />
                <path
                  className="cls-637b7068f95e86b59c579e0f-1"
                  d="M8.18,5.32h0A4.77,4.77,0,0,1,13,10.09v1a0,0,0,0,1,0,0H3.41a0,0,0,0,1,0,0v-1A4.77,4.77,0,0,1,8.18,5.32Z"
                />
                <line
                  className="cls-637b7068f95e86b59c579e0f-1"
                  x1="11.05"
                  y1="16.77"
                  x2="11.05"
                  y2="18.68"
                />
              </svg>
            </div>
            <div className="w-11/12">
              <h1 className="text-3xl mt-2 md:text-xl font-semibold text-gray-800 dark:text-white">
                The <span className="text-emerald-600">Feature</span> of #1
              </h1>
            </div>
          </div>
          <div className="w-[95%] md:!w-[125%] xl:!w-[100%]">
            <p className="text-md mb-4 line-clamp-4 md:line-clamp-none dark:text-white">
              X-One of a lot of features is that's free forever. You can copy and paste it or modify however you want. Feel free to name the author in a hidden remark or to set the components as favorite.
            </p>
          </div>
          {/* Project Cards */}
          <div className="flex flex-row">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`basis-1/3 hover:scale-125 cursor-pointer transition-all duration-300 pr-8 h-24 bg-cover py-2 px-2 text-white ${index === 1 ? "hover:-ml-12" : ""}`}
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <h1 className="font-semibold text-white">{project.title}</h1>
                <p className="w-full text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
