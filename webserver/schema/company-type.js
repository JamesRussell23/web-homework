const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat
  } = graphql

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: {type: GraphQLString },
        transaction_id: {type: GraphQLString},
        total_transactions: {type: GraphQLFloat},
        credit_line: {type: GraphQLFloat},
        available_credit: {type: GraphQLFloat}
        // insert resolver that subtracts amount from totalTransactions
        // from credit_line
    })
})

module.exports = CompanyType