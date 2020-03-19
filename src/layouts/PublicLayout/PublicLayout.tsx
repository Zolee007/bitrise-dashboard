import React, { PropsWithChildren } from "react";
import { Flex, FlexProps } from "rebass/styled-components";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;
`;

const PublicLayout = ({ children, ...rest }: PropsWithChildren<FlexProps>): JSX.Element => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default PublicLayout;
