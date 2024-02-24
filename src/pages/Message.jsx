import animationData from "./../assets/lotties/guiter.json";
import LottieImg from "./../component/LottieImg";

const Message = () => {
  return (
    <div className="flex-col flex gap-2 justify-center items-center h-[60vh]  ">
      <div className="size-[200px] md:size-[400px]">
        <LottieImg animationData={animationData} />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl text-center">
        One <span className="text-red-600">thing </span>I want to say before
        goodbye !
      </h1>
    </div>
  );
};

export default Message;
