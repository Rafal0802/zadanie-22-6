import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
  	<nav className={styles.nav}>
  		<ul>
  			<li><Link to="/home"><FormattedMessage id="home" /></Link></li>
  			<li><Link to="/"><FormattedMessage id="posts" /></Link></li>
  			<li><Link to="/about"><FormattedMessage id="about" /></Link></li>
  		</ul>
  	</nav>
  );
}

Navigation.propTypes = {
};

export default Navigation;
