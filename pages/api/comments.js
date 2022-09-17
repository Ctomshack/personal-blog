// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function getComments (req, res) {
  // console.log(process.env.GRAPHCMS_TOKEN)
  const { name, email, comment, slug } = req.body;

  const graphQlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  // QUERY TO CREATE & STORE COMMENTS IN GRAPHCMS
  // mutation in GraphQL is used to update or add new data (like a comment)
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, article: { connect: { slug: $slug } }}) { id }
    }
  `
try {
  const result = await graphQlClient.request(query, req.body)

  return res.status(200).send(result);
  
} catch (err) {
  console.log(err)
}
}
