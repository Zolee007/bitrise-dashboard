import React from "react";
import Skeleton from "react-loading-skeleton";
import { Box, Text, Flex } from "rebass/styled-components";
import styled from "styled-components";

import AppImage from "components/AppImage/AppImage";
import BuildStatusColorBar from "components/BuildStatusColorBar/BuildStatusColorBar";
import ShadowCard, { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { App } from "types/App";

const StyledShadowCard = styled(ShadowCard)`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const InnerFlex = styled(Flex)`
  flex: 1;
  flex-direction: column;
`;

export type AppCardProps = ShadowCardProps & {
  app?: App | null;
};

const AppCard = ({ app }: AppCardProps): JSX.Element => {
  return (
    <StyledShadowCard mx={0} my={3}>
      <Box p={2}>
        <AppImage app={app} />
      </Box>
      <InnerFlex mx={2}>
        <Text fontSize={3} fontWeight="bold">
          {app ? app.title : <Skeleton height="32px" width="250px" />}
        </Text>
        <Text>{app ? app.owner.name : <Skeleton height="16px" width="250px" />}</Text>
      </InnerFlex>
      <BuildStatusColorBar app={app} />
    </StyledShadowCard>
  );
};

export default AppCard;
