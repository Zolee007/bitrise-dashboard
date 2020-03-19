import React from "react";
import Skeleton from "react-loading-skeleton";
import { Image, Box, Text } from "rebass/styled-components";
import styled, { css } from "styled-components";

import { App } from "types/App";
import { getAppAvatarUrl, getAppColor, getAppShortName } from "utils/AppUtils";

const commonCss = css`
  height: 48px;
  width: 48px;
  border-radius: 9999px;
`;

const StyledImage = styled(Image)`
  ${commonCss}
`;

const ImagePlaceholder = styled(Box)`
  ${commonCss}
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export type AppImageProps = {
  app?: App | null;
};

const AppImage = ({ app }: AppImageProps): JSX.Element => {
  const url = getAppAvatarUrl(app);
  const appColor = getAppColor(app);
  const appId = getAppShortName(app);

  return (
    <>
      {!app && <Skeleton height="48px" width="48px" circle={true} />}
      {app && url && <StyledImage backgroundColor="skeleton" src={url} />}
      {app && !url && (
        <ImagePlaceholder backgroundColor={appColor}>
          <Text fontSize={3}>{appId}</Text>
        </ImagePlaceholder>
      )}
    </>
  );
};

export default AppImage;
