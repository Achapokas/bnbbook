import { withApollo } from "next-apollo";
import ApolloClient, {gql} from "apollo-boost";


const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
});

// client
//   .query({
//     query: gql`
//       {
//         restaurants {
//           id
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

export default withApollo(client);
