import React, { PropsWithChildren } from "react";
import { Heading, HeadingProps } from "rebass/styled-components";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { border, BorderProps } from "styled-system";

const StyledHeading = styled(Heading)<HeadingProps & BorderProps>`
  ${border}
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;

const CardHeading = ({ children, ...rest }: PropsWithChildren<HeadingProps & BorderProps>): JSX.Element => {
  return (
    <StyledHeading fontWeight="300" color="primary" borderBottomColor="primary" {...rest}>
      {children || <Skeleton width="100px" />}
    </StyledHeading>
  );
};

export default CardHeading;
