import React from 'react';

export const withSimpleLoadData = ({requestUrl}) => WrapperComponent => {
  return class SimpleLoadData extends React.PureComponent {
    state = {
      data: []
    };

    componentDidMount() {
      this.loadData();
    }

    loadData = () => {
      fetch(requestUrl)
        .then(response => response.json())
        .then(response =>
          this.setState({
            data: response
          })
        );
    };

    render () {
      const { data } = this.state;
      return <WrapperComponent {...this.props} data={data} />
    }
  }
};