import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4skshcu29e101yy7nfjcy61/master',
    cache: new InMemoryCache()
})