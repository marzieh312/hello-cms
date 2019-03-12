import React from 'react';
import { Query } from 'react-apollo';
import { GET_FAQ_CONTENT } from '../queries';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import styles from './FaqPage.module.scss';
import Loading from '../components/shared/Loading';
import FaqSection from '../components/faq/FaqSection';
import RightPanel from '../components/faq/RightPanel';

class FaqPage extends React.Component {
  state = {
    selectedFaqIndex: 0
  }

  onSelectFaq = (selectedFaqIndex) => {
    this.setState({
      selectedFaqIndex
    })
  }

  render() {
    return(
      <div>
        <Query query={GET_FAQ_CONTENT}>
        {({ data, loading }) => {

          if (loading || !data.faqs) {
            return <Loading />;
          }
          const faqTitles = data.faqs;
          const selectedFaq = faqTitles[this.state.selectedFaqIndex];
          return (
            <div className={styles.FaqPage}>
              <Row>              
                <Col md={4}>
                  <RightPanel 
                    faqTitles={faqTitles} 
                    selectedFaqIndex={this.state.selectedFaqIndex}
                    onSelect={this.onSelectFaq}
                    />
                </Col>
                <Col md={8}>
                  <Container>
                    <FaqSection faqItem={selectedFaq} />
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