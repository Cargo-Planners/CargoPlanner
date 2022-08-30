import { useState } from "react";

const CheckBox = () => {
  const [isTrue, setIsTrue] = useState("");

  const handleChange = (event) => {
    setIsTrue(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <div>
      <input type="checkbox" />

      <h2>Message: {isTrue}</h2>
    </div>
  );
};

export default CheckBox;
