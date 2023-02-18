import React from "react";
import { useContext } from "react";
import { NavContext } from "./Context";

const withProvider = (provider) => (IncomingCommponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingCommponent {...contextData} {...props} />;
};

export default withProvider;
export const withNavbar = withProvider(NavContext);
