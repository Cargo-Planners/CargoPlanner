import DataBox from "./DataBox";

const FuelPodData = () => {
  const external = 3;
  const auxiliary = 34;
  const inboard = 23;
  const outboard = 43;

  return (
    <div id="fuel-data">
      <DataBox
        bgColor="#EAFEEE"
        color="#FF0000"
        text="External"
        data={external}
      />
      <DataBox
        bgColor="#EAFEEE"
        color="#FF0000"
        text="Auxiliary"
        data={auxiliary}
      />
      <DataBox
        bgColor="#EAFEEE"
        color="#FF0000"
        text="Inboard"
        data={inboard}
      />
      <DataBox
        bgColor="#EAFEEE"
        color="#FF0000"
        text="Outboard"
        data={outboard}
      />
    </div>
  );
};

export default FuelPodData;
