const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        books: [Book]
    }

    type Query {
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        me: User
    }
`;

module.exports = typeDefs;
