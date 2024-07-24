import React, { useState } from "react";
import Tag from "./Tag";

function ProjectTile({ title, date, tags, description, longDescription = "" }) {
  const folderName = title.toLowerCase().replace(/\s/g, "");

  let defaultImage;

  try {
    try {
      defaultImage = require(`../assets/images/${folderName}/default.png`);
    } catch (error) {
      defaultImage = require(`../assets/images/${folderName}/1.png`);
    }
  } catch (error) {
    defaultImage = "https://via.placeholder.com/150";
  }

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <>
      <div
        className="max-w-96 min-w-64 max-h-96 flex flex-col hover:shadow hover:border-y-2 border-t-tile-light border-b-tile border border-tile bg-light hover:bg-tile hover:cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200"
        onClick={toggleModal}
      >
        <div className="h-64 w-full flex justify-center align-center">
          <img
            src={defaultImage}
            alt={title}
            className="h-full w-full m-2 pb-2 object-cover rounded"
          />
        </div>
        <div className="flex flex-col p-2 rounded-b-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="text-xs text-textColor-dark">{date}</h1>
          </div>
          <h1 className="text-sm text-textColor text-justify m-0">
            {description}
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} type="tag" />
            ))}
          </div>
        </div>
      </div>

      {/* modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="flex flex-col m-2 md:flex-row justify-center gap-4 bg-tile border-2 border-tile border-t-tile-light p-5 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full w-full sm:w-96 sm:h-96 flex justify-center align-center">
              <img
                src={defaultImage}
                alt={title}
                className="h-full w-full bg-black object-contain rounded"
              />
            </div>
            <div className="max-w-96">
              <div className="flex gap-4 justify-between items-center">
                <h1 className="font-bold text-lg">{title}</h1>
                <h1 className="text-xs text-textColor-dark">{date}</h1>
              </div>
              <h1 className="text-xs text-textColor text-justify mb-2">
                {description}
              </h1>
              <div className="border-b border-gray-600 mb-2"></div>
              <h1 className="text-xs text-textColor text-justify whitespace-pre-wrap mb-4">
                {longDescription}
              </h1>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} type="tag" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectTile;
