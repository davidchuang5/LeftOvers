import React, { useState } from "react";
import Preset from "./Presets.jsx";

const PresetContainer = ({ app_id, app_key, recipes, setRecipes }) => {
  //const [genre, setGenre] = useState([['Korean','soondubu'], ['Indian', 'butterchicken'], ['Chinese', 'chowmein'], ['Mediterranean', 'Gyro'], ['Japanese','sushi'], ['Italian','Gnocchi']])
  const genre = [
    ["Korean", "soondubu"],
    ["Indian", "butterchicken"],
    ["Chinese", "chowmein"],
    ["Mediterranean", "Gyro"],
    ["Japanese", "sushi"],
    ["Italian", "Gnocchi"],
  ];
  const [hidden, setHidden] = useState(true);

  const presetElems = genre.map((ele, i) => {
    return <Preset key={i} genre={ele[0]} image={ele[1]} app_id={app_id} app_key={app_key} />;
  });

  if (hidden) {
    return (
      <div>
        <>
          <h2 id="font" style={{ fontSize: "35px" }} className="searchBar">
            Taste the World
          </h2>
          <div className="preset_grid">{presetElems}</div>
        </>
      </div>
    );
  }
};

export default PresetContainer;
