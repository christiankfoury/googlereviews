import { GraphQLClient } from "graphql-request";

const auth = () => {
    return process.env.NODE_ENV === "development" ? process.env.REACT_APP_HYGRAPH_AUTH_TOKEN_DEV : process.env.REACT_APP_HYGRAPH_AUTH_TOKEN_PROD;
};

const endpoint =
    "https://api-ca-central-1.hygraph.com/v2/cl7i3j2l41k6x01td5gyr36ho/master";

export const client = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${auth()}`,
    },
});