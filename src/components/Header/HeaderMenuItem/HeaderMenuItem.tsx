import React from "react";
import { Link } from "react-router-dom";
import { Text, Link as NavLink } from "rebass/styled-components";

export type HeaderMenuItemProps = {
  title: string;
  path: string;
  selected?: boolean;
};

const HeaderMenuItem = ({ title, path, selected }: HeaderMenuItemProps): JSX.Element => {
  return (
    <Link to={path}>
      <NavLink variant="nav">
        <Text mx={2} fontSize={3} fontWeight={selected ? "bold" : "300"}>
          {title}
        </Text>
      </NavLink>
    </Link>
  );
};

export default HeaderMenuItem;
