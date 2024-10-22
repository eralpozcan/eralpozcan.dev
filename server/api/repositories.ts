import { Octokit } from 'octokit';

interface Repository {
  id: string;
  name: string;
  description: string | null;
  homepageUrl: string | null;
  url: string;
  createdAt: string;
  updatedAt: string;
  primaryLanguage: {
    name: string;
  } | null;
  languages: {
    color: string;
    id: string;
    name: string;
  }[];
  repositoryTopics: {
    topic: {
      id: string;
      name: string;
    };
  }[];
  openGraphImageUrl: string;
}

interface ViewerData {
  viewer: {
    repositories: {
      nodes: Repository[];
    };
  };
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const octokit = new Octokit({
    auth: config.githubToken,
  });

  const query = `
    query {
      viewer {
        login
        repositories(first: 20
        orderBy: {field: UPDATED_AT, direction: DESC}
        isLocked: false
        isArchived: false
        privacy: PUBLIC
        ) {
          nodes {
            id
            name
            createdAt
            updatedAt
            description
            url
            homepageUrl
            primaryLanguage {
              name
            }
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

  const data: ViewerData = await octokit.graphql(query);

  const repositories = data.viewer.repositories.nodes.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    homepageUrl: item.homepageUrl,
    url: item.url,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    primaryLanguage: item.primaryLanguage,
    languages: item.languages,
    repositoryTopics: item.repositoryTopics,
    openGraphImageUrl: item.openGraphImageUrl,
  }));

  return {
    repositories,
  };
});
