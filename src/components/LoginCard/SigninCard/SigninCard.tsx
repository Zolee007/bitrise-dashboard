import React, { useState } from "react";
import Creatable from "react-select/creatable";
import { Button } from "rebass/styled-components";

import CardHeading from "components/CardHeading/CardHeading";
import ShadowCard from "components/ShadowCard/ShadowCard";
import { DefaultAuthToken } from "configs/Config";
import styled from "styled-components";
import { useAuthHandler } from "hooks/useAuthHandler";

const StyledShadowCard = styled(ShadowCard)`
  display: flex;
  min-width: 400px;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

const SignInCard = (): JSX.Element => {
  const defaultValue = { label: "ninja", value: DefaultAuthToken };
  const [value, setValue] = useState<string>(defaultValue.value);
  const handler = useAuthHandler(value);

  return (
    <StyledShadowCard p={4} px={5}>
      <CardHeading data-cy="signin-heading" mb={3}>
        Select user
      </CardHeading>
      <Creatable
        data-cy="signin-user-selector"
        isClearable={true}
        defaultValue={defaultValue}
        options={[defaultValue]}
        onChange={(item): void => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (item as any)?.value;
          if (val) {
            setValue(val);
          }
        }}
      />
      <Button data-cy="signin-login-button" variant="big" m={3} onClick={handler}>
        Login
      </Button>
    </StyledShadowCard>
  );
};

export default SignInCard;
