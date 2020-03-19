import React from "react";
import { useParams } from "react-router-dom";

import AppCard from "components/AppListCard/AppCard/AppCard";
import ListCard from "components/ListCard/ListCard";
import { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { useFetchApps } from "hooks/useFetchApps";
import { useRetryHandler } from "hooks/useRetryHandler";
import { App } from "types/App";

export type AppListCardProps = ShadowCardProps;

const AppListCard = ({ ...rest }: AppListCardProps): JSX.Element => {
  const { slug = null } = useParams();
  const { dependency, handler } = useRetryHandler();
  const result = useFetchApps(slug, [dependency]);

  return (
    <ListCard
      {...rest}
      title="Apps"
      result={result}
      handler={handler}
      renderSkeletonItem={(item: App, index): JSX.Element => <AppCard m={0} key={index} app={item} />}
      renderItem={(item: App, _): JSX.Element => <AppCard key={item.slug} app={item} />}
    />
  );
};

export default AppListCard;
