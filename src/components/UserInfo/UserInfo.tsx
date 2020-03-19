// eslint-disable @typescript-eslint/camelcase
import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Link as NavLink, FlexProps } from "rebass/styled-components";

import defaultImage from "assets/images/user.png";
import { currentUser } from "services/AuthService";

export type UserInfoProps = FlexProps;

const UserInfo = ({ ...rest }: UserInfoProps): JSX.Element => {
  const user = currentUser();

  return (
    <Flex alignItems="center" {...rest}>
      <Image variant="avatar" src={user?.avatar_url || defaultImage} />
      <Link to="/profile">
        <NavLink variant="nav" fontSize={2}>
          {user?.username || "Anonymous"}
        </NavLink>
      </Link>
    </Flex>
  );
};

export default UserInfo;
