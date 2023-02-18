import { ImSpinner } from "react-icons/im";

const LoadingSpinner = ({ className }) => {
  return <ImSpinner className={`animate-spin ${className}`} />;
};

export default LoadingSpinner;
