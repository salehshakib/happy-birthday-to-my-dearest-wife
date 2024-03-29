import LottieImg from "../component/LottieImg";
import animationData from "../assets/lotties/party.json";

const Party = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <div className="flex items-center justify-center gap-3">
        <h1 className="font-bold text-2xl md:text-4xl text-center  flex flex-col items-center justify-center gap-2">
          <div className="">
            Its time to <span className="text-red-600">Party</span>.
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Party;
