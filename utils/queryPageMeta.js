export default async function (title, slug) {
  const QUERY = /* GraphQL */ `
          query {
            allPages(filter: { slug: { eq: ${slug} } }) {
              seo {
                description
                title
              }
            }
          }
        `;
  const { data, error } = await useGraphqlQuery({ query: QUERY });
  const seo_data = toRaw(data.value.allPages[0].seo);
  return setupPageMeta(title, seo_data);
}
