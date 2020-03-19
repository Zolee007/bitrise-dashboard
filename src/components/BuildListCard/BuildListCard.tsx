import React from "react";
import { useParams } from "react-router-dom";

import BuildCard from "components/BuildListCard/BuildCard/BuildCard";
import ListCard from "components/ListCard/ListCard";
import { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { useFetchBuilds } from "hooks/useFetchBuilds";
import { useRetryHandler } from "hooks/useRetryHandler";
import { Build } from "types/Build";

export type BuildListCardProps = ShadowCardProps;

const BuildListCard = ({ ...rest }: BuildListCardProps): JSX.Element => {
  const { slug = null } = useParams();
  const { dependency, handler } = useRetryHandler();
  const result = useFetchBuilds(slug, [dependency]);

  return (
    <ListCard
      {...rest}
      title="Builds"
      result={result}
      handler={handler}
      renderSkeletonItem={(item: Build, index): JSX.Element => <BuildCard m={0} key={index} build={item} />}
      renderItem={(item: Build, _): JSX.Element => <BuildCard key={item.slug} build={item} />}
    />
  );
};

export default BuildListCard;
