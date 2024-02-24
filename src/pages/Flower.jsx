import animationData from "./../assets/lotties/flower.json";
import LottieImg from "./../component/LottieImg";
import flower from "../assets/bouquet.gif";

const Flower = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <div className="font-bold text-2xl md:text-4xl text-center flex items-center justify-center gap-3">
        <div className="">
          And a <span className="text-red-600">Flower </span>for my beautiful{" "}
          <span className="text-pink-600">Flower </span>
        </div>
        <img src={flower} alt="" className="size-10" />
      </div>
    </div>
  );
};

export default Flower;
