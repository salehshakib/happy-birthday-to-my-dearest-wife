import LottieImg from "../component/LottieImg";
import animationData from "../assets/lotties/wish.json";
import balloons from "../assets/balloons.gif";

const Wish = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <div className="flex items-center justify-center gap-3">
        <img src={balloons} alt="" className="size-8 md:size-10" />
        <h1 className="font-bold text-2xl md:text-4xl text-center  flex flex-col items-center justify-center gap-2">
          {/* <div className="">
            Happy <span className="text-red-600">Birthday</span>{" "}
          </div> */}
          <div className="">
            My Dearest and Loving <span className="text-red-600">Wife </span>
          </div>
        </h1>
        <img src={balloons} alt="" className="size-8 md:size-10" />
      </div>
    </div>
  );
};

export default Wish;
