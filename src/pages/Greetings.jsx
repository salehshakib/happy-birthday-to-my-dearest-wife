// import gifImage from "./../assets/teddy-bear.gif";
import animationData from "./../assets/lotties/teddy.json";
import LottieImg from "./../component/LottieImg";
import teddy from "../assets/teddy-bear.gif";
const Greetings = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl flex justify-center items-center gap-2">
        <div>
          <span className="text-red-600">Hello</span>, My Teddy Bear
        </div>

        <img src={teddy} alt="" className="size-8 md:size-10" />
      </h1>
    </div>
  );
};

export default Greetings;
