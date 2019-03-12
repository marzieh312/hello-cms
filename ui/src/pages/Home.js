import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const GET_HOME_CONTENT = gql`
  {
    homepage {
      heading
      subheading
      heroImageUrl
    }
  }
`;

class Home extends React.Component {
  render() {
    return(
      <div className={styles.Home}>
        <Query query={GET_HOME_CONTENT}>
        {({ data, loading }) => {

          if (loading || !data.homepage) {
            return <div>Loading ...</div>;
          }

          const {heading, heroImageUrl, subheading} = data.homepage

          return (
            <div>
              <h1>{heading}</h1>
              <img src={heroImageUrl} alt="hero logo"/>
              <p>{subheading}</p>
              <Link to="/faqs">Learn more ...</Link>
            </div>
          );
        }}
        </Query>
      </div>
    ) 
  }
}

export default Home;