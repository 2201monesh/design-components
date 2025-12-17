import "./cardTiltAnimation.css";

const CardTiltAnimation = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 p-20">
      <Card color="#16a34a" bgColor="#dcfce7" />
      <Card color="#db2777" bgColor="#fce7f3" />
      <Card color="#527cee" bgColor="#dbeafe" />
    </div>
  );
};

export default CardTiltAnimation;

const Card = ({ color, bgColor }) => {
  return (
    <div className="card-wrapper">
      <div className="card w-60 h-24 border-2 border-dashed border-neutral-300 rounded-xl p-2 cursor-pointer flex flex-col mb-8 text-xs transition-transform duration-300 ease-out hover:-rotate-4 bg-white">
        <div className="w-full flex items-center justify-between text-xs border-b-2 border-dashed border-neutral-300 pb-1">
          <p>
            <span className="text-neutral-300 font-semibold">TODAY: </span>{" "}
            <span className="font-semibold text-neutral-600">WED</span>
          </p>
          <p className="text-neutral-300 font-semibold">17 DEC</p>
        </div>
        <div
          className={`w-full h-full rounded-lg mt-2 shadow-sm p-2 flex`}
          style={{ backgroundColor: bgColor }}
        >
          <div className={`border`} style={{ borderColor: color }}></div>
          <div
            className={`w-full flex justify-between flex-col ml-2`}
            style={{ color: color }}
          >
            <div className="flex items-center justify-between">
              <p style={{ fontWeight: 600 }}>Mobility</p>
              <p style={{ fontWeight: 600 }}>45m</p>
            </div>
            <p style={{ fontWeight: 600 }}>5:00 - 6:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
