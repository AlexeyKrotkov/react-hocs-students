import React from 'react';

export const withSimpleForm = ({ fieldNames }) => WrapperComponent =>
  class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      fieldNames.forEach(fieldName => {
        this.state[fieldName] = '';
      });
    }

    onChange = event => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    };

    render() {
      return (
        <WrapperComponent
          onChange={this.onChange}
          formValues={this.state}
          {...this.props}
        />
      );
    }
  };
