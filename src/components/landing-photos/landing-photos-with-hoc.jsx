import React from 'react';
import styles from './landing-photos.module.scss';
import { withSimpleLoadData } from '../helpers/with-simple-load-data';

class LandingPhotosWithHocUI extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.photos}>
        {data.map(elem => (
          <img key={elem.id} alt={elem.title} src={elem.url} />
        ))}
      </div>
    );
  }
}

export const LandingPhotosWithHoc = withSimpleLoadData({
  requestUrl: 'https://jsonplaceholder.typicode.com/photos?_limit=5'
})(LandingPhotosWithHocUI);
