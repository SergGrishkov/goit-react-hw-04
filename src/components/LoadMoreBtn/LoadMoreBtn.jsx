import CustomButton from './CustomButton';
import { errorMessage } from "../../notification/messages";

const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <CustomButton onClick={onClick}>{errorMessage.loadMore}</CustomButton>
      )}
    </>
  );
};

export default LoadMoreBtn;
