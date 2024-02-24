import { lazy } from "react";

const Greetings = lazy(() => import("./Greetings"));
const Wish = lazy(() => import("./Wish"));
const Party = lazy(() => import("./Party"));
const Gift = lazy(() => import("./Gift"));
const Heart = lazy(() => import("./Heart"));
const Flower = lazy(() => import("./Flower"));
const Dandelion = lazy(() => import("./Dandelion"));
const Thanks = lazy(() => import("./Thanks"));
const Message = lazy(() => import("./Message"));

const BirthdayPage = () => {
  return (
    <>
      <div className="section">
        <Greetings />
      </div>
      <div className="section ">
        <Wish />
      </div>
      <div className="section ">
        <Party />
      </div>
      <div className="section ">
        <Gift />
      </div>
      <div className="section">
        <Heart />
      </div>
      <div className="section">
        <Flower />
      </div>
      <div className="section">
        <Dandelion />
      </div>
      <div className="section">
        <Message />
      </div>
      <div className="section">
        <Thanks />
      </div>
    </>
  );
};

export default BirthdayPage;
