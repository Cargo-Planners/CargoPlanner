import { useDispatch, useSelector } from "react-redux";
import { updateFuelPod } from "../../redux/EditBasicDataSlice";

import { useState } from "react";

const options = [
  { id: true, name: "Yes" },
  { id: false, name: "No" },
];

function Radio() {
  const { fuelPod } = useSelector((state) => state.basicData);
  const dispatch = useDispatch();

  const changeList = (id, checked) => {};
  return (
    <form>
      {options.map(({ id, name, checked }) => (
        <label key={id}>
          <input
            type="radio"
            name="options"
            value={id}
            checked={checked}
            onChange={(e) => {
              changeList(id, e.target.checked);
              dispatch(updateFuelPod(id));
            }}
          />
          {name}
        </label>
      ))}
    </form>
  );
}
export default Radio;
