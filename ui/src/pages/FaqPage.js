import React from 'react';
import { Query } from 'react-apollo';
import { GET_FAQ_CONTENT } from '../queries';
import {
  Nav,
  Container,
  NavItem,
  Row,
  Col
} from 'reactstrap';
import styles from './FaqPage.module.scss';
import classnames from "classnames";

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
          const faqTitles = data.faqs;

          const fqaEls = faqTitles.map((title, index) => 
            {
              let className = classnames(styles.NavItem, {
                [styles.active]: !!(index === this.state.selectedFaqIndex),
              });

              return (
                <NavItem 
                  className={className}
                  onClick={() => this.setState({selectedFaqIndex: index})}>
                      {title.title}
                </NavItem>
              )
            }
          )
          const selectedFaq = faqTitles[this.state.selectedFaqIndex];
          // Here I assumed that the cms always returns the secure data so no need to purify it
          const createMarkup = () => ({
            __html: selectedFaq.body
          });

          return (
            <div className={styles.FaqPage}>
            <Row>              
              <Col md={4}>
                <Nav vertical className={styles.Nav}>
                  {fqaEls}
                </Nav>
              </Col>
              <Col md={8}>
                <Container>
                  <div>
                    <h1>{selectedFaq.title}</h1>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                  </div>
                </Container>
                </Col>
              </Row>
            </div>
          );
        }}
        </Query>
      </div>
    ) 
  }
}

export default FaqPage;