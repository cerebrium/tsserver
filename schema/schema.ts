const { gql } = require('apollo-server-express')
require('../config/config')

const typeDefs = gql`
    type Apartment {
        _id: ID
        name: String,
        email: String,
        location: String,
        image: String,
        description: String,
        amenities: [String]
    }

    type Query {
        getApartments: [Apartment]
        filteredApartments(location: String!): [Apartment]
        oneApartment(_id: ID!): Apartment
    }
    type Mutation {
        addApartment(name: String!, email: String!, location: String!, image: String!, description: String!, amenities: [String]!): Apartment
        updateApartment(_id: ID!, name: String, email: String, image: String, description: String, location: String, amenities: [String]): Apartment
        deleteApartment(_id: ID!): Apartment
    }
`;
  
export default typeDefs