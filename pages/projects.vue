<template>
  <div class="flex flex-wrap">
    <div class="flex-auto" v-for="repository in filteredRepositories" :key="repository.id">
    <CardView :data="repository" />
    </div>
  </div>

</template>
<script setup>
// https://docs.github.com/en/graphql/reference/enums#repositoryorderfield
  const query = gql`
  query User {
    viewer {
      repositories(
          first: 12
          orderBy: {field: PUSHED_AT, direction: DESC}
          isLocked: false
          privacy: PUBLIC
      ) {
          totalCount
          nodes {
              id
              name
              createdAt
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
              openGraphImageUrl
          }
      }
    }
}
`;

const { data } = await useAsyncQuery(query)
const repositories = ref(data.value?.viewer.repositories.nodes)
const filteredRepositories = repositories.value.filter((repository) => repository.isInOrganization === false);
console.log(filteredRepositories)
</script>