"use server";

const baseUrl = process.env.GRAPHQL_URL!;

import { gql, GraphQLClient } from "graphql-request";
import { Continent, Country } from "@/lib/types";

const client = new GraphQLClient(baseUrl);

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

  if (!data.countries) {
    return [];
  }

  //simulate delay
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  return data.countries;
}

export async function getAllContinents() {
  const query = gql`
    query {
      continents {
        name
      }
    }
  `;

  const data: { continents: Continent[] } = await client.request(query);

  if (!data.continents) {
    return [];
  }

  return data.continents;
}
