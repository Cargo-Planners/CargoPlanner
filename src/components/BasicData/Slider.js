const Slider = ({ label, changeValue, value }) => {
  const handleChange = (e) => {
    changeValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label>{label + ":"}</label>
        <label className="mr-2">{value + "%"}</label>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          className="form-range
            appearance-none
            w-full
            h-3
            p-0
            bg-cyan-200
            shadow-lg
            rounded-md
            focus:outline-none focus:ring-0 focus:shadow-none"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Slider;
