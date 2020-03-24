import React from "react";
import { Image, Heading, Button, Flex, FlexProps } from "rebass/styled-components";
import styled from "styled-components";

import ErrorImage from "assets/images/error.png";

const StyledFlex = styled(Flex)`
  align-items: center;
  flex-direction: column;
`;

export type ErrorPanelProps = FlexProps & {
  error?: Error;
  showImage?: boolean;
  handler?: VoidFunction;
};

const ErrorPanel = ({ showImage = true, error, handler, ...rest }: ErrorPanelProps): JSX.Element => {
  return (
    <StyledFlex {...rest}>
      {error && (
        <>
          {showImage && <Image src={ErrorImage} />}
          <Heading data-cy="error-heading" fontWeight="300" color="red">
            {error.message}
          </Heading>
          {handler && (
            <Button data-cy="error-button" variant="big" onClick={handler}>
              Retry
            </Button>
          )}
        </>
      )}
    </StyledFlex>
  );
};

export default ErrorPanel;
