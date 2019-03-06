import { gql } from 'apollo-server-express'
import cmsModel from './models'

export const typeDefs = gql`
  type HomePage {
    heading: String
    subheading: String
    heroImageUrl: String
  }

  type Faq {
    title: String
    body: String
  }

  type Query {
    homepage: HomePage,
    faqs: [Faq]
  }
`

export const resolvers = {
  Query: {
    homepage() {
      return cmsModel.homepage()
    },
    faqs() {
      return cmsModel.faqs()
    }
  }
}