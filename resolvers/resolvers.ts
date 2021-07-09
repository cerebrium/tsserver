const { Apartments } = require('../models/model')

const resolvers = {
    Query: {
        getApartments: async () => {
            try {
                let response = await Apartments.find({}).exec()
                return response
            } catch(e) {
                return e.message
            }
        },
        filteredApartments: async (_, args) => {
            try {
                let response = await Apartments.find({
                    location: {
                        $eq: args.location
                    }
                }).exec()

                return response
            } catch(e) {
                return e.message
            }
        },
        oneApartment: async (_, args) => {
            try {
                let response = await Apartments.findOne({_id: args._id}).exec()
                return response
            } catch(e) {
                return e.message
            }
        },
    },
    Mutation: {
        addApartment: async (_, args) => {
            try {
                let response = await Apartments.create(args)
                return response
            } catch(e) {
                return e.message
            }
        },
        updateApartment: async (_, args) => {
            try {

                // map of updates to apply
                let updates = {...args}

                // delete the _id
                delete updates._id

                // attempt update finds and returns, then updates
                let response = await Apartments.findOneAndUpdate({_id: args._id}, updates)

                return response
            } catch(e) {
                return e.message
            }
        },
        deleteApartment: async (_, args) => {
            try {
                let response = await Apartments.deleteOne({_id: args._id})
                return response
            } catch (e) {
                return e.message
            }
        }
    }
}

export default resolvers