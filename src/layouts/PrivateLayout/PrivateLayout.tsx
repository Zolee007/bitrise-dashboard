import React, { PropsWithChildren } from "react";
import { Box, BoxProps, FlexProps } from "rebass/styled-components";
import styled from "styled-components";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import PublicLayout from "layouts/PublicLayout/PublicLayout";

const StyledPublicLayout = styled(PublicLayout)`
  min-height: 800px;
  max-width: 1200px;
  margin: auto;
  justify-content: stretch;
  align-items: stretch;
`;

const StyledBox = styled(Box)<BoxProps>`
  flex: 1;
  height: calc(100vh - 100px);
`;

export type PrivateLayoutProps = FlexProps & {
  title: string;
};

const PrivateLayout = ({
  title = "DefaultPage",
  children,
  ...rest
}: PropsWithChildren<PrivateLayoutProps>): JSX.Element => {
  return (
    <StyledPublicLayout {...rest}>
      <Header data-cy="header" height="60px" title={title} />
      <StyledBox data-cy="content" as="main">
        {children}
      </StyledBox>
      <Footer height="40px" data-cy="footer" />
    </StyledPublicLayout>
  );
};

export default PrivateLayout;
