import animationData from "./../assets/lotties/hug.json";
import LottieImg from "./../component/LottieImg";

const Thanks = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl text-center">
        <span className="text-red-600">Thank you</span> for coming into my life.
      </h1>
    </div>
  );
};

export default Thanks;
