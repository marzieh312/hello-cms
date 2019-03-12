import React from 'react';
import { Query } from 'react-apollo';
import { GET_FAQ_CONTENT } from '../queries';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
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
        {({ data: {faqs}, loading }) => {

          if (loading || !faqs) {
            return <Loading />;
          }

          return (
            <div>
              <Row>              
                <Col md={4}>
                  <RightPanel 
                    faqs={faqs}
                    selectedFaqIndex={this.state.selectedFaqIndex}
                    onSelect={this.onSelectFaq}
                    />
                </Col>
                <Col md={8}>
                  <Container>
                    <FaqSection faqItem={faqs[this.state.selectedFaqIndex]} />
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