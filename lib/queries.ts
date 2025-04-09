export const baseUrl = "https://countries.trevorblades.com";
import { gql, GraphQLClient } from "graphql-request";
import { Country } from "@/lib/types";

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getAllCountries() {
  const query = gql`
    query {
      countries {
        code
        name
        currency
        emoji
        continent {
          name
        }
        languages {
          name
        }
        capital
      }
    }
  `;

  const data: { countries: Country[] } = await client.request(query);

  return data.countries;
}
