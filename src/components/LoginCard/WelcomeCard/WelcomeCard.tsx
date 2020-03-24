import React from "react";
import Skeleton from "react-loading-skeleton";
import { Button, Image, Heading, Text, Box, Flex } from "rebass/styled-components";
import styled from "styled-components";

import userImage from "assets/images/user.png";
import ErrorPanel from "components/ErrorPanel/ErrorPanel";
import ShadowCard, { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { useFetchUser } from "hooks/useFetchUser";
import { useSignInHandler } from "hooks/useSignInHandler";
import { useSignOutHandler } from "hooks/useSignOutHandler";

const StyledShadowCard = styled(ShadowCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 9999px;
`;

const StyledBox = styled(Box)`
  height: 1px;
`;

export type WelcomeCardProps = ShadowCardProps;

const WelcomeCard = ({ ...rest }: WelcomeCardProps): JSX.Element => {
  const { isLoading, data: user, error } = useFetchUser([]);
  const signInHandler = useSignInHandler(user);
  const signOutHandler = useSignOutHandler(true);

  return (
    <StyledShadowCard py={4} px={5} {...rest}>
      {isLoading && (
        <>
          <Skeleton circle={true} height="220px" width="220px" />
          <Text fontSize={4} fontWeight="300">
            <Skeleton width="200px" />
          </Text>
          <Heading fontSize={5}>
            <Skeleton width="250px" />
          </Heading>
          <Skeleton width="100px" height="50px" />
          <Text>
            <Skeleton width="200px" />
          </Text>
          <Skeleton width="100px" height="50px" />
        </>
      )}
      {!error && user && (
        <>
          <StyledImage backgroundColor="skeleton" height="220px" width="220px" src={user.avatar_url || userImage} />
          <Text data-cy="welcome-user-name" fontSize={4} fontWeight="300">
            {user.username}
          </Text>
          <Heading data-cy="welcome-heading" fontSize={5}>
            Welcome back!
          </Heading>
          <Button data-cy="welcome-continue-button" variant="big" m={3} onClick={signInHandler}>
            Continue
          </Button>
          <Flex width="100%" alignItems="center">
            <StyledBox flex="1" margin={3} backgroundColor="secondary" />
            <Text data-cy="welcome-not-you">Not {user.username}?</Text>
            <StyledBox flex="1" margin={3} backgroundColor="secondary" />
          </Flex>
          <Button data-cy="welcome-signin-other-button" variant="big" m={3} onClick={signOutHandler}>
            Sign-in as other
          </Button>
        </>
      )}
      {error && <ErrorPanel error={new Error("Ooops, something went wrong!")} handler={signOutHandler} />}
    </StyledShadowCard>
  );
};

export default WelcomeCard;
