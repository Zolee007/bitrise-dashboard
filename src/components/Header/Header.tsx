import React from "react";
import { Box, Flex, FlexProps, Button } from "rebass/styled-components";
import styled from "styled-components";

import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
import { ReactComponent as BitriseLogo } from "assets/images/logo-bitrise.svg";
import { ReactComponent as SignoutIcon } from "assets/images/logout.svg";
import HomeLink from "components/HomeLink/HomeLink";
import UserInfo from "components/UserInfo/UserInfo";
import { HeaderItems, MenuItem } from "mocks/MockHeaderItems";
import { useSignOutHandler } from "hooks/useSignOutHandler";

const StyledFlex = styled(Flex)<FlexProps>`
  justify-content: center;
  align-items: center;
`;

export type HeaderProps = FlexProps & {
  title: string;
};

const Header = ({ title, ...rest }: HeaderProps): JSX.Element => {
  const handler = useSignOutHandler(false);

  return (
    <StyledFlex variant="header" as="header" {...rest}>
      <HomeLink>
        <BitriseLogo height="32px" />
      </HomeLink>
      {HeaderItems.map((item: MenuItem, index: number) => (
        <HeaderMenuItem key={index} selected={item.title === title} {...item} />
      ))}
      <Box mx="auto" />
      <UserInfo />
      <Button variant="signout" onClick={handler}>
        <SignoutIcon fill="white" />
      </Button>
    </StyledFlex>
  );
};

export default Header;
