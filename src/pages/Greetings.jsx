// import gifImage from "./../assets/teddy-bear.gif";
import animationData from "./../assets/lotties/teddy.json";
import LottieImg from "./../component/LottieImg";

const Greetings = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl">
        <span className="text-red-600">Hello</span>, My Teddy Bear
      </h1>
    </div>
  );
};

export default Greetings;
