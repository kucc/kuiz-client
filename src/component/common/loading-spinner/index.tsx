import React from "react";
import StyledLoadingSpinner from "./styles";

const LoadingSpinner = (): JSX.Element => {
  return (
    <StyledLoadingSpinner>
      <img src="/src/asset/spinner.svg" alt="loading..." />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
