import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const HomeLink = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return <Link to="/">{children}</Link>;
};

export default HomeLink;
