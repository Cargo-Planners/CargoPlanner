const Slider = ({ label }) => {
  return (
    <div>
      <div
        class="
       "
      >
        <label className="text-base">{label}</label>
        <input
          type="range"
          min="0"
          max="100"
          className="
          
            form-range
            appearance-none
            w-full
            h-3
            p-0
            bg-cyan-200
            shadow-lg
            rounded-md
            
            focus:outline-none focus:ring-0 focus:shadow-none
            "
        />
      </div>
    </div>
  );
};

export default Slider;
