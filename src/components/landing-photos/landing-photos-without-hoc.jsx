import React from 'react';
import styles from './landing-photos.module.scss';

export class LandingPhotosWithoutHoc extends React.PureComponent {
  state = {
    data: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(response => response.json())
      .then(response =>
        this.setState({
          data: response
        })
      );
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.photos}>
        {data.map(elem => (
          <img key={elem.id} alt={elem.title} src={elem.url} />
        ))}
      </div>
    );
  }
}
