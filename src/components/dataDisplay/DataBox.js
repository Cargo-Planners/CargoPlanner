const DataBox = ({ bgColor, color, text, data }) => {
  return (
    <div id="data-box" style={{ backgroundColor: bgColor }}>
      <h2 style={{ color: color }}>{text}</h2>
      <div>{data}</div>
    </div>
  );
};

export default DataBox;
