import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Nav,
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Container,
  Collapse,
  NavItem,
  NavLink
} from 'reactstrap';
const GET_FAQ_CONTENT = gql`
  {
    faqs {
      title,
      body
    }
  }
`;

class FaqPage extends React.Component {
  state = {
    selectedFaqIndex: 0
  }

  render() {
    return(
      <div>
        <Query query={GET_FAQ_CONTENT}>
        {({ data, loading }) => {

          if (loading || !data.faqs) {
            return <div>Loading ...</div>;
          }
          const faqTitles = data.faqs
          const fqaEls = faqTitles.map((title, index) => 
            (
              <NavItem onClick={() => this.setState({selectedFaqIndex: index})}>
              {title.title}
              </NavItem>
            )
          )
          const selectedFaq = faqTitles[this.state.selectedFaqIndex]
          return (
            <div>
              <Nav vertical>
                {fqaEls}
              </Nav>
              <Container>
                <div>
                  <h1>{selectedFaq.title}</h1>
                  <p>
                    {selectedFaq.body}
                  </p>
                </div>
              </Container>
            </div>
          );
        }}
        </Query>
      </div>
    ) 
  }
}

export default FaqPage;