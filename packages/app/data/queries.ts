export const sphereByIdOrDomainQueryArgs = (sphere: {
  id?: number;
  domain: string;
}) => ({
  where: sphere.id
    ? { id: { _eq: sphere.id } }
    : { django_site: { domain: { _eq: sphere.domain } } },
});
