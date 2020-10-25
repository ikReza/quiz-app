import React from "react";
import { CustomQuizButton } from "./customButton.styles";

const CustomButton = ({ children, ...props }) => {
  return <CustomQuizButton {...props}>{children}</CustomQuizButton>;
};

export default CustomButton;
