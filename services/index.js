import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// GET ALL ARTICLES
export const getArticles = async () => {
    const query = gql`
    query MyQuery {
        articlesConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }`;

      const result = await request(graphqlAPI, query)

      return result.articlesConnection.edges;
}

// GET CONTENT OF A SINGLE ARTICLE
export const getArticleContent = async (slug) => {
  const query = gql`
  query GetArticleContent($slug: String!) {
    article(where: { slug : $slug }) {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            postContent {
              raw
            }
          }
    }`;

    
    const result = await request(graphqlAPI, query, { slug })
    // console.log('ZZZZZZZZZ', result)

    return result.article;
}

export const getRecentArticles = async () => {
  const query = gql`
  query GetArticleDetails() {
    articles(
      orderBy: createdAt_ASC
      last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }
  `

  const result = await request(graphqlAPI, query)

  return result.articles;
}

export const getSimilarArticles = async (categories, slug) => {
  const query = gql`
    query GetArticleDetails($slug: String!, $categories: [String!]) {
      articles(
        where: {slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query, { categories, slug })

  return result.articles;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }  
  `
  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: {article: {slug: $slug}}) {
        createdAt
        name
        comment
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
// console.log('kkkk', result)
  return result.comments;
}