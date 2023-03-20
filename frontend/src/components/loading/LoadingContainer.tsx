import Lottie from 'lottie-react';
import loader from '../../assets/animations/9921-loader.json';
type LoadingContainerProps = {
  children: JSX.Element;
  show: boolean;
};
const LoadingContainer = ({ children, show }: LoadingContainerProps) => {
  if (show) {
    return (
      <div className="relative flex justify-center align-center bg-white opacity-30 w-screen  max-h-screen ">
        {children}
        <Lottie
          style={{
            height: 200
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animationData={loader}
        />
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default LoadingContainer;
