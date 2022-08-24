import React from "react";

const ObjectList = () => {
  return (
    <div className="w-auto my-6">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <p>שם</p>
          <p>משקל</p>
          <p>מרחק</p>
        </div>
        <div className="flex flex-col h-auto bg-[#72C4D8] text-right p-3 rounded-lg">
          <div className="flex justify-between">
            <p>עגלה</p>
            <p>7500</p>
            <p>500</p>
          </div>
          <div className="flex justify-between">
            <p>רכב</p>
            <p>11500</p>
            <p>350</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectList;
