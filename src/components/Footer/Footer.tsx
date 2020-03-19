import React from "react";
import { Flex, FlexProps, Text } from "rebass/styled-components";
import styled from "styled-components";
import { shadow, ShadowProps } from "styled-system";

const StyledFlex = styled(Flex)<FooterProps>`
  ${shadow}
  justify-content: center;
  align-items: center;
`;

export type FooterProps = FlexProps & ShadowProps;

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <StyledFlex as="footer" backgroundColor="primary" boxShadow="footer" p={2} {...props}>
      <Text variant="copyrightText">Copyright © 2020 - Zoltan Szabo</Text>
    </StyledFlex>
  );
};

export default Footer;
