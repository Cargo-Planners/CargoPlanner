const Slider = ({ label, changeValue, value }) => {
  const handleChange = (e) => {
    changeValue(e.target.value);
  };

  return (
    <div className="grid grid-rows-4 place-content-center">
      <div className="grid grid-rows-2 ">
        <label id="data-col-h1">{label}</label>
        <div className="bg-[#FFFFFF] mx-4 my-2 rounded-lg text-center text-3xl ">
          <h1>{value + "%"}</h1>
        </div>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={value}
          id="fuel-silder"
          className="justify-center"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Slider;
