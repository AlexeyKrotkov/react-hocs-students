import React from 'react';

export class SimpleFormWithoutHoc extends React.PureComponent {
  state = {
    username: 'Vasya'
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  render() {
    const { username } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="username" />
          <input value={username} onChange={this.onChange} id="username" />
        </div>
      </form>
    );
  }
}
