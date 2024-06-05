import { toHead } from 'vue-datocms';

export default async function () {
  const QUERY = `query {
        site: _site {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          },
          globalSeo {
            fallbackSeo{
              title
              description
            }
          }
        }
        homePage {
          seo: _seoMetaTags {
            attributes
            content
            tag
          },
          siteTitle{
            title
          }
        }
      }`;
  const { data } = await useGraphqlQuery({ query: QUERY });

  // set global fallbacks
  const site_title = useState(
    'site_title',
    () => data.value.homePage.siteTitle.title
  );
  const site_desc = useState(
    'site_desc',
    () => data.value.site.globalSeo.fallbackSeo.description
  );

  // compile meta tags for head
  useHead(() => {
    if (!data.value) return {};
    return toHead(data.value.homePage.seo, data.value.site.favicon);
  });
}
