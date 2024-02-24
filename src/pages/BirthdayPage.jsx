import Dandelion from "./Dandelion";
import Flower from "./Flower";
import Gift from "./Gift";
import Greetings from "./Greetings";
import Heart from "./Heart";
import Party from "./Party";

const BirthdayPage = () => {
  return (
    <>
      <div className="section">
        <Greetings />
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
    </>
  );
};

export default BirthdayPage;
