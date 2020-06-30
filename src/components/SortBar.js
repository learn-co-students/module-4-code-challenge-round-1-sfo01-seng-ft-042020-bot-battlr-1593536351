import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "Assault", text: "Assault", value: "Assault" },
  { key: "Support", text: "Support", value: "Support" },
  { key: "Medic", text: "Medic", value: "Medic" },
  { key: "Defender", text: "Defender", value: "Defender" },
  { key: "Captain", text: "Captain", value: "Captain" },
  { key: "Witch", text: "Witch", value: "Witch" },
];

const SortBar = (props) => {
  return (
    <div>
      <label>Filter:</label>
      <Dropdown
        onChange={(e) => props.updateFilter(e)}
        placeholder=""
        fluid
        multiple
        selection
        options={options}
      />
    </div>
  );
};

export default SortBar;
