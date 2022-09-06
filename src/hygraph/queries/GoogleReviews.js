import { gql } from "graphql-request";
import { client } from "../client";

export default class GoogleReviews {
    #getReviews;
    constructor() {
        this.#getReviews = gql`
        query MyQuery {
            googleReviews {
                id
                name
                starRating
                comment
                createTime
                profilePhotoUrl {
                    url
                }
            }
        }
    `;
    }

    fetchReviews = async () => {
        return await client.request(this.#getReviews);
    };
}