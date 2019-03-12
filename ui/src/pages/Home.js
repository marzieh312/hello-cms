import React from 'react';
import { Query } from 'react-apollo';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { GET_HOME_CONTENT } from '../queries';
import Loading from '../components/shared/Loading';

class Home extends React.Component {
  render() {
    return(
      <div className={styles.Home}>
        <Query query={GET_HOME_CONTENT}>
        {({ data, loading }) => {

          if (loading || !data.homepage) {
            return <Loading />;
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