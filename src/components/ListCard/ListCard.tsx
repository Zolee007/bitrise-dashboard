import React, { useCallback } from "react";
import { Text, Box } from "rebass/styled-components";
import styled from "styled-components";

import CardHeading from "components/CardHeading/CardHeading";
import ErrorPanel from "components/ErrorPanel/ErrorPanel";
import ShadowCard, { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { ListSkeletonItemCount } from "configs/Config";
import { FetchResult } from "hooks/useFetchData";

const StyledShadowCard = styled(ShadowCard)`
  height: inherit;
  min-height: inherit;
  display: flex;
  flex-direction: column;
`;

const OverflowBox = styled(Box)`
  overflow: auto;
`;

export type ListCardProps<T> = ShadowCardProps & {
  title: string;
  result: FetchResult<T[]>;
  handler?: VoidFunction;
  renderSkeletonItem: (item: T, index: number) => JSX.Element;
  renderItem: (item: T, index: number) => JSX.Element;
};

const ListCard = <T extends object>({
  title,
  result,
  handler,
  renderSkeletonItem,
  renderItem,
  ...rest
}: ListCardProps<T>): JSX.Element => {
  const { isLoading, data: items, error } = result;
  const renderSkeletons = useCallback(() => renderSkeletonItems(renderSkeletonItem), [renderSkeletonItem]);
  const renderItems = useCallback((items) => renderValidItems(renderItem)(items), [renderItem]);

  return (
    <StyledShadowCard p={3} {...rest}>
      <CardHeading mx={2}>{title}</CardHeading>
      <OverflowBox px={2}>
        {/* Skeleton cards */}
        {isLoading && renderSkeletons()}
        {/* No apps */}
        {!error && items && items.length === 0 && (
          <Text p={2} textAlign="center" fontSize={3}>
            No items found!
          </Text>
        )}
        {/* The real cards */}
        {!error && items && items.length > 0 && renderItems(items)}
        {error && <ErrorPanel error={error} handler={handler} />}
      </OverflowBox>
    </StyledShadowCard>
  );
};

function renderSkeletonItems<T>(renderItem: (item: T, index: number) => JSX.Element): JSX.Element[] {
  const skeletonItems = Array(ListSkeletonItemCount).fill(null);
  return skeletonItems.map(renderItem);
}

function renderValidItems<T>(renderItem: (item: T, index: number) => JSX.Element): (items: T[]) => JSX.Element[] {
  return (items: T[]): JSX.Element[] => items.map(renderItem);
}

export default ListCard;
