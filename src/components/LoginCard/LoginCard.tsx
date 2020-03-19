import React from "react";

import SignInCard from "./SigninCard/SigninCard";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import { token } from "services/AuthService";

const LoginCard = (): JSX.Element => {
  const authToken = token();

  return (
    <>
      {!authToken && <SignInCard />}
      {authToken && <WelcomeCard />}
    </>
  );
};

export default LoginCard;
