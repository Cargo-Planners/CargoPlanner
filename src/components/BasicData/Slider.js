const Slider = ({ label, changeValue, value }) => {
  const handleChange = (e) => {
    changeValue(e.target.value);
  };

  return (
    <div className="grid grid-rows-4">
      <label className="m-1 row-span-1">
        {label} {value + "%"}
      </label>

      <input
        type="range"
        min="0"
        max="100"
        defaultValue={value}
        className="
        row-span-3
          vertical
          form-range
            appearance-none
            w-full
            h-4
            p-0
            shadow-lg
            rounded-md
            focus:outline-none focus:ring-0 focus:shadow-none
            "
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
