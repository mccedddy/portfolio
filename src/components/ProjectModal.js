import React, { useEffect } from "react";
import Tag from "./Tag";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

// Import all images for different folders
const importAllImages = (r) => r.keys().map(r);

const imagesMap = {
  "2faattendancesystem": importAllImages(
    require.context("../assets/projects/2faattendancesystem", true, /\.png$/)
  ),
  mywallet: importAllImages(
    require.context("../assets/projects/mywallet", true, /\.png$/)
  ),
  aidledger: importAllImages(
    require.context("../assets/projects/aidledger", true, /\.png$/)
  ),
  correctme: importAllImages(
    require.context("../assets/projects/correctme", true, /\.png$/)
  ),
  flappypet: importAllImages(
    require.context("../assets/projects/flappypet", true, /\.png$/)
  ),
  foxey: importAllImages(
    require.context("../assets/projects/foxey", true, /\.png$/)
  ),
  letmecook: importAllImages(
    require.context("../assets/projects/letmecook", true, /\.png$/)
  ),
  quiznakeescalade: importAllImages(
    require.context("../assets/projects/quiznakeescalade", true, /\.png$/)
  ),
  randomwordgenerator: importAllImages(
    require.context("../assets/projects/randomwordgenerator", true, /\.png$/)
  ),
  shoot: importAllImages(
    require.context("../assets/projects/shoot", true, /\.png$/)
  ),
};

function ProjectModal({ project, toggleModal }) {
  // Initialize Splide
  useEffect(() => {
    const splide = new Splide("#image-carousel", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 3000,
      arrows: true,
      pagination: true,
    });

    splide.mount();
    return () => splide.destroy();
  }, []);

  const { title, date, tags, longDescription, link } = project;
  const folderName = title.toLowerCase().replace(/\s+/g, "");

  // Get images from the imagesMap based on folderName
  const images = imagesMap[folderName] || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={toggleModal}
    >
      <div
        className="flex w-10/12 flex-col md:flex-row md:w-11/12 lg:flex-row lg:w-2/3 justify-between gap-4 bg-tile border-2 border-tile border-t-tile-light p-5 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full w-full md:w-1/2 lg:w-1/2 flex justify-center align-center">
          <section
            id="image-carousel"
            className="splide"
            aria-label="Beautiful Project Images"
          >
            <div className="splide__track">
              <ul className="splide__list">
                {images.map((image, index) => (
                  <li key={index} className="splide__slide">
                    <img
                      src={image}
                      alt={`${title} slide ${index + 1}`}
                      className="w-full h-96 bg-black object-contain rounded"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="h-full w-full md:w-1/2 lg:w-1/2">
          <div className="flex gap-4 justify-between items-center">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="text-xs text-textColor-dark">{date}</h1>
          </div>
          {longDescription.map((paragraph, index) => (
            <h1
              key={index}
              className="text-xs text-textColor text-justify mb-2"
            >
              {paragraph}
            </h1>
          ))}
          {link && (
            <div className="flex gap-2">
              <h1 className="text-sm text-textColor">Visit:</h1>
              <a
                href={link}
                className="text-sm text-textColor hover:text-textColor-light hover:underline"
              >
                {title}
              </a>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} type="tag" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
