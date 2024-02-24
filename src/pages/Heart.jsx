import animationData from "../assets/lotties/heart-lottie.json";
import LottieImg from "./../component/LottieImg";
import heart from "../assets/heart.gif";

const Heart = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <div className="flex gap-2 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          I give you my <span className="text-red-600">Heart</span>
        </h1>

        <img src={heart} alt="" className="size-8 md:size-10 object-cover" />
      </div>
    </div>
  );
};

export default Heart;
