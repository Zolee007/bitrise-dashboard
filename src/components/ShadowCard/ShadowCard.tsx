import React, { PropsWithChildren } from "react";
import { Card, CardProps } from "rebass/styled-components";
import styled from "styled-components";
import { shadow, ShadowProps } from "styled-system";

const StyledCard = styled(Card)<CardProps & ShadowProps>`
  ${shadow}
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
`;

export type ShadowCardProps = PropsWithChildren<CardProps & ShadowProps>;

const ShadowCard = ({ children, ...rest }: ShadowCardProps): JSX.Element => {
  return (
    <StyledCard p={2} boxShadow="card" {...rest}>
      {children}
    </StyledCard>
  );
};

export default ShadowCard;
