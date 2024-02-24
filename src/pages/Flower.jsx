import animationData from "./../assets/lotties/flower.json";
import LottieImg from "./../component/LottieImg";

const Flower = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl">
        And a <span className="text-red-600">Flower </span>for my{" "}
        <span className="text-pink-600">Flower </span> {":)"}
      </h1>
    </div>
  );
};

export default Flower;
