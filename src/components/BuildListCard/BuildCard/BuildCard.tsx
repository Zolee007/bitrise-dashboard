import React from "react";
import Skeleton from "react-loading-skeleton";
import { Text, Box, Flex } from "rebass/styled-components";
import styled from "styled-components";

import AppImage from "components/AppImage/AppImage";
import ShadowCard, { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { Build } from "types/Build";
import { getBuildStatusColor } from "utils/BuildUtils";
import BuildStatusColorBar from "components/BuildStatusColorBar/BuildStatusColorBar";

const StyledShadowCard = styled(ShadowCard)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled(Box)`
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
  grid:
    [row1-start] "image build-id app-name status-text status-color" 32px [row1-end]
    [row2-start] "image build-id owner-name date status-color" 32px [row2-end]
    / 48px auto 2fr 1fr 2rem;
`;

const DateFlex = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
`;

const DateText = styled(Text)`
  text-align: end;
`;

export type BuildCardProps = ShadowCardProps & {
  build: Build | null;
};

const BuildCard = ({ build }: BuildCardProps): JSX.Element => {
  return (
    <StyledShadowCard mx={0} my={3}>
      <Grid>
        <Box sx={{ gridArea: "image" }}>
          <AppImage app={build?.repository || null} />
        </Box>
        <Text fontWeight="bold" fontSize={3} sx={{ gridArea: "app-name", justifySelf: "start" }}>
          {build?.repository.title || <Skeleton height="20px" width="150px" />}
        </Text>
        <Text fontWeight="bold" fontSize={3} p={2} sx={{ gridArea: "build-id" }}>
          {build?.build_number || <Skeleton height="20px" width="150px" />}
        </Text>
        <Text
          fontSize={3}
          fontWeight="bold"
          color={getBuildStatusColor(build)}
          sx={{ gridArea: "status-text", justifySelf: "end" }}
        >
          {build?.status_text.toUpperCase() || <Skeleton height="20px" width="150px" />}
        </Text>
        <Text fontSize={1} sx={{ gridArea: "owner-name", justifySelf: "start" }}>
          {build?.repository.owner.name || <Skeleton height="20px" width="150px" />}
        </Text>
        <DateFlex sx={{ gridArea: "date", justifySelf: "end" }}>
          <DateText fontSize={0}>
            {(build?.triggered_at && `${new Date(build.triggered_at).toLocaleTimeString()}`) || (
              <Skeleton height="10px" width="150px" />
            )}
          </DateText>
          <DateText fontSize={0}>
            {(build?.triggered_at && `${new Date(build.triggered_at).toLocaleDateString()}`) || (
              <Skeleton height="10px" width="150px" />
            )}
          </DateText>
        </DateFlex>
        <Box sx={{ gridArea: "status-color", justifySelf: "end" }}>
          <BuildStatusColorBar mr={1} app={build?.repository} />
        </Box>
      </Grid>
    </StyledShadowCard>
  );
};

export default BuildCard;
