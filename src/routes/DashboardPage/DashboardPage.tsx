import React from "react";
import { Box } from "rebass/styled-components";
import styled from "styled-components";

import AppListCard from "components/AppListCard/AppListCard";
import BuildListCard from "components/BuildListCard/BuildListCard";
import PrivateLayout from "layouts/PrivateLayout/PrivateLayout";
import OrganizationCard from "components/OrganizationCard/OrganizationCard";

const Grid = styled(Box)`
  height: 100%;
  min-height: 100%;
  display: grid;
  grid-gap: 16px;
  grid:
    [row1-start] ". org" auto [row1-end]
    [row2-start] "builds apps" 1fr [row2-end]
    / 3fr 2fr;

  @media all and (max-width: 900px) {
    grid:
      [row1-start] "org" auto [row1-end]
      [row2-start] "apps" 1fr [row2-end]
      [row3-start] "builds" 2fr [row3-end]
      / 1fr;
  }
`;

const DashboardPage = (): JSX.Element => {
  return (
    <PrivateLayout title="Dashboard">
      <Grid p={3}>
        <OrganizationCard data-cy="organization-list" sx={{ gridArea: "org" }} />
        <BuildListCard data-cy="build-list" sx={{ gridArea: "builds", alignSelf: "start" }} />
        <AppListCard data-cy="app-list" sx={{ gridArea: "apps", alignSelf: "start" }} />
      </Grid>
    </PrivateLayout>
  );
};

export default DashboardPage;
