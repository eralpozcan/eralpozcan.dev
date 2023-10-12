<script setup>
// https://docs.github.com/en/graphql/reference/enums#repositoryorderfield
const query = gql`
  query User {
    viewer {
      repositories(
          first: 12
          orderBy: {field: UPDATED_AT, direction: DESC}
          isLocked: false
          privacy: PUBLIC
      ) {
          totalCount
          nodes {
              id
              name
              createdAt
              updatedAt
              description
              url
              homepageUrl
              isInOrganization
              languages(first: 5) {
                  nodes {
                      color
                      id
                      name
                  }
              }
              repositoryTopics(first: 5) {
                  nodes {
                      topic {
                          id
                          name
                      }
                  }
              }
              openGraphImageUrl
          }
      }
    }
}
`;

const { data } = await useAsyncQuery(query)
const repositories = ref(data.value?.viewer.repositories.nodes)
const filteredRepositories = repositories.value?.filter((repository) => repository.isInOrganization === false);

useHead(
  {
    title: 'Eralp Özcan Projects',
    meta: [
      { name: 'description', content: 'Eralp Özcan Projects'},
      { property: 'og:site_name', content: 'Eralp Özcan' },
      { property: 'og:url', content: 'https://eralpozcan.dev' },
      { property: 'og:title', content: 'Eralp Özcan Projects' },
      { property: 'og:description', content: 'Eralp Özcan Projects' },
      { property: 'og:image', content: 'https://eralpozcan.dev/og-image.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@eralpozcan' },
      { property: 'twitter:creator', content: '@eralpozcan' },
      { property: 'twitter:title', content: 'Eralp Özcan Projects' },
      { property: 'twitter:description', content: 'Eralp Özcan Projects' },
      { property: 'twitter:image', content: 'https://eralpozcan.dev/og-image.png' },
      { property: 'twitter:url', content: 'https://eralpozcan.dev/projects' },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://eralpozcan.dev/projects',
      },
    ],
  }
)

</script>

<template>
  <div class="flex flex-wrap">
    <div class="flex-auto" v-for="repository in filteredRepositories" :key="repository.id">
      <CardView :data="repository" />
    </div>
  </div>
</template>
