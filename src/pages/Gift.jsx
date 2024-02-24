import animationData from "./../assets/lotties/gift.json";
import LottieImg from "./../component/LottieImg";

const Gift = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl">
        I have a <span className="text-red-600">Gift</span> for You.
      </h1>
    </div>
  );
};

export default Gift;
