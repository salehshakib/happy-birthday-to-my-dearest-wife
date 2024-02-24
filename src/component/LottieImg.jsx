import Lottie from "react-lottie";
import PropTypes from "prop-types";

const LottieImg = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
};

LottieImg.propTypes = {
  animationData: PropTypes.object.isRequired,
};

export default LottieImg;
