import loading from "@/assets/loading.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={loading}
        className="flex w-20 justify-center items-center"
        loop={true}
      />
    </div>
  );
};

export default Loading;
