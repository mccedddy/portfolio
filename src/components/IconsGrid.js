import React from "react";

// Dynamically require all SVGs in the new location
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const icons = importAll(
  require.context("../assets/icons", false, /\.svg$/) // Adjusted path to src/assets/icons
);

const IconsGrid = () => {
  return (
    <div className="max-w-80 flex flex-wrap gap-2">
      {icons.map((icon, index) => (
        <img key={index} className="h-8 w-8" src={icon} alt={`icon-${index}`} />
      ))}
    </div>
  );
};

export default IconsGrid;
