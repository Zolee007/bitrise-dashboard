import React from "react";
import Select from "react-select";

import ErrorPanel from "components/ErrorPanel/ErrorPanel";
import CardHeading from "components/CardHeading/CardHeading";
import ShadowCard, { ShadowCardProps } from "components/ShadowCard/ShadowCard";
import { useFetchOrganizations } from "hooks/useFetchOrganizations";
import { useRetryHandler } from "hooks/useRetryHandler";
import { useUrlSlugHandler } from "hooks/useUrlSlugHandler";

type OptionValType = {
  value: string | null;
  label: string;
};

export const DefaultValue: OptionValType = {
  value: null,
  label: "All",
};

export type OrganizationCardProps = ShadowCardProps;

const OrganizationCard = ({ ...rest }: OrganizationCardProps): JSX.Element => {
  const { slug, handler: handleSlugChange } = useUrlSlugHandler((slug) => (slug ? `/slug/${slug}` : "/"));
  const { dependency, handler } = useRetryHandler();
  const { isLoading, data: organizations, error } = useFetchOrganizations([dependency]);

  const values = [
    DefaultValue,
    ...(organizations || []).map((org) => {
      return {
        value: org.slug,
        label: org.name,
      } as OptionValType;
    }),
  ];
  const selectedValue = values.find((v) => v.value === slug) || DefaultValue;

  return (
    <ShadowCard p={3} {...rest}>
      <CardHeading mb={3} htmlFor="org-select">
        Choose organization
      </CardHeading>
      {isLoading && <Select isDisabled />}
      {!error && organizations && (
        <Select
          id="org-select"
          defaultValue={selectedValue}
          options={values}
          onChange={(item): void => {
            const slug = (item as OptionValType)?.value;
            if (handleSlugChange) {
              handleSlugChange(slug);
            }
          }}
        />
      )}
      {error && <ErrorPanel error={error} handler={handler} />}
    </ShadowCard>
  );
};

export default OrganizationCard;
