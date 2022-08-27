import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWeight } from "../../redux/EditStaticDataButtonSlice";

const ObjectList = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState(0);
  const [listOfObjectSum, setListOfObjectSum] = useState(0);

  const objectListItems = useSelector(
    (state) => state.fixedCargo.objectListItems
  );

  const weightChangeHandler = (e) => {
    setWeight(e.target.value);
  };

  const calculateWeight = () => {
    dispatch(addWeight(listOfObjectSum));
  };

  const onBlur = () => {
    setListOfObjectSum((prev) => (prev += parseInt(weight)));
  };

  return (
    <div className="w-auto my-6">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <p>שם</p>
          <p>משקל(KG)</p>
          <p>מרחק(FS)</p>
        </div>
        <div className="flex flex-col min-h-[50px] h-auto bg-[#72C4D8] text-right p-3 rounded-lg">
          {objectListItems.map((item, index) => (
            <div key={index} className="flex mb-2 gap-2">
              <p className="w-1/3">{item}</p>
              <input
                onBlur={onBlur}
                onChange={(e) => weightChangeHandler(e)}
                className="w-1/3 bg-[#8EDBED]"
                placeholder="משקל"
              />
              <input className="w-1/3 bg-[#8EDBED]" placeholder="מרחק" />
            </div>
          ))}
          <button
            onClick={calculateWeight}
            className="bg-[#8EDBED] mt-4 mx-auto py-2 px-4 rounded-lg"
          >
            עדכן משקל מטען כולל
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectList;

// <div className="flex justify-between">
// <p>עגלה</p>
// <p>7500</p>
// <p>500</p>
// </div>
// <div className="flex justify-between">
// <p>רכב</p>
// <p>11500</p>
// <p>350</p>
// </div>
