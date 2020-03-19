import React from "react";
import styled from "styled-components";
import { BoxProps, Box } from "rebass/styled-components";

import { App } from "types/App";
import { getBuildStatusColor } from "utils/BuildUtils";
import Skeleton from "react-loading-skeleton";

const StyledBox = styled(Box)`
  width: 1rem;
  height: 70px;
  border-radius: 0.5rem;
`;

const SkeletonBox = styled(Box)`
  width: 1rem;
  height: 70px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export type BuildStatusColorBarProps = BoxProps & {
  app?: App | null;
};

const BuildStatusColorBar = ({ app }: BuildStatusColorBarProps): JSX.Element => {
  return app ? (
    <StyledBox backgroundColor={getBuildStatusColor(app)} />
  ) : (
    <SkeletonBox>
      <Skeleton width="2rem" height="100px" />
    </SkeletonBox>
  );
};

export default BuildStatusColorBar;
