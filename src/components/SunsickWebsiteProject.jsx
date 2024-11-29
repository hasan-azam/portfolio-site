import React from "react";
import SunsickWebsiteImage from "../assets/projects/SunsickWebsiteProject.gif";  // Correct import

const SunsickWebsiteProject = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-white text-center">
      <h1 className="my-20 text-center text-4xl">
        Sunsick <span className="text-neutral-500">Band Website</span>
      </h1>
      <div className="flex flex-col items-center">
        {/* Image Section */}
        <div className="w-full lg:w-3/4 mb-8 flex justify-center">
          <img
            className="rounded-2xl object-cover shadow-lg"
            src={SunsickWebsiteImage}  // Use imported image variable
            alt="Sunsick Band Website"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/4 px-4">
          {/* Overview */}
          <div className="my-4">
            <h2 className="text-2xl text-neutral-500 mb-4">Overview</h2>
            <p>
              A responsive website for{" "}
              <a
                href="https://sunsick.band"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Sunsick.band
              </a>
              , built using HTML, CSS, and JavaScript. It features dynamic video
              animations and seamless deployment through GitHub Pages.
            </p>
          </div>

          {/* Features */}
          <div className="my-4">
            <h2 className="text-2xl text-neutral-500 mb-4">Features</h2>
            <ul className="list-disc pl-5 text-left inline-block">
              <li>Stylish and responsive design tailored to the band's aesthetic.</li>
              <li>Integrated widgets for media players and event calendars.</li>
              <li>Custom JavaScript animations for dynamic visual effects.</li>
            </ul>
          </div>

          {/* Development Details */}
          <div className="my-4">
            <h2 className="text-2xl text-neutral-500 mb-4">Development Details</h2>
            <ul className="list-disc pl-5 text-left inline-block">
              <li>
                <strong>Technology Stack:</strong> HTML, CSS, JavaScript, Git,
                GitHub Pages.
              </li>
              <li>
                <strong>Challenges:</strong> Optimizing video animations for
                cross-browser compatibility and setting up a robust deployment
                workflow.
              </li>
              <li>
                <strong>Learning Experience:</strong> Gained skills in widget
                integration, custom scripting, and deployment pipelines.
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="my-4">
            <h2 className="text-2xl text-neutral-500 mb-4">Links</h2>
            <ul className="list-disc pl-5 text-left inline-block">
              <li>
                <a
                  href="https://sunsick.band"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Sunsick.band (Live Website)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hasan-azam/sunsick-site" // Replace with the actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunsickWebsiteProject;
