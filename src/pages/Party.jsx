import LottieImg from "./../component/LottieImg";
import animationData from "../assets/lotties/party.json";

const Party = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl text-center space-y-2">
        Happy <span className="text-red-600">Birthday</span> to you
        <div>
          My lovely <span className="text-pink-600">Wife </span>!!!
        </div>
      </h1>
    </div>
  );
};

export default Party;
