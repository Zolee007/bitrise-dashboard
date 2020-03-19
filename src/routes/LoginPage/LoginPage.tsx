import React from "react";

import LoginCard from "components/LoginCard/LoginCard";
import PublicLayout from "layouts/PublicLayout/PublicLayout";

const LoginPage = (): JSX.Element => {
  return (
    <PublicLayout minHeight="500px">
      <LoginCard />
    </PublicLayout>
  );
};

export default LoginPage;
