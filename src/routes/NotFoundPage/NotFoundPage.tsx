import React from "react";
import { Heading, Button, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

import { ReactComponent as NotFoundImage } from "assets/images/not-found.svg";
import HomeLink from "components/HomeLink/HomeLink";
import ShadowCard from "components/ShadowCard/ShadowCard";
import PublicLayout from "layouts/PublicLayout/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout/PrivateLayout";
import { isSignedIn } from "services/AuthService";

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledShadowCard = styled(ShadowCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(NotFoundImage)<LayoutProps>`
  ${layout}
  height: 40vh;
  min-height: 400px;
  min-width: 400px;
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      {isSignedIn() ? (
        <PrivateLayout title="" minHeight="660px">
          <StyledFlex>
            <StyledShadowCard p={4}>
              <StyledImage data-cy="not-found-image" />
              <Heading data-cy="not-found-title" fontSize={6} color="secondary">
                Page not found!
              </Heading>
              <HomeLink>
                <Button data-cy="not-found-go-home" variant="big">
                  Go Home
                </Button>
              </HomeLink>
            </StyledShadowCard>
          </StyledFlex>
        </PrivateLayout>
      ) : (
        <PublicLayout minHeight="660px">
          <StyledShadowCard p={4}>
            <StyledImage data-cy="not-found-image" />
            <Heading data-cy="not-found-title" fontSize={6} color="secondary">
              Page not found!
            </Heading>
            <HomeLink>
              <Button data-cy="not-found-go-home" variant="big">
                Go Home
              </Button>
            </HomeLink>
          </StyledShadowCard>
        </PublicLayout>
      )}
    </>
  );
};
export default NotFoundPage;
