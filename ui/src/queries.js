import gql from 'graphql-tag';

export const GET_HOME_CONTENT = gql`
{
  homepage {
    heading
    subheading
    heroImageUrl
  }
}
`;

export const GET_FAQ_CONTENT = gql`
{
  faqs {
    title,
    body
  }
}
`;


