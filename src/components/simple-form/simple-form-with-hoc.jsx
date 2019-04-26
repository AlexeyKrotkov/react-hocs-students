import React from 'react';
import { isNil} from 'lodash';
import { withSimpleForm } from '../helpers/with-simple-form';
import styles from './simple-form.module.scss';

class SimpleFormWithHocUI extends React.PureComponent {
  onChangeUserName = (event) => {
    const { value } = event.target;
    const { onChange } = this.props;
    if (!isNil(value) && value.length <= 10) {
      onChange(event);
    }
  };

  render() {
    const { formValues, onChange } = this.props;
    return (
      <form>
        <div className={styles.row}>
          <label htmlFor="username" />
          <input
            value={formValues.username}
            onChange={this.onChangeUserName}
            id="username"
            name="username"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="companyName" />
          <input
            value={formValues.companyName}
            onChange={onChange}
            id="companyName"
            name="companyName"
          />
        </div>
      </form>
    );
  }
}

export const SimpleFormWithHoc = withSimpleForm({
  fieldNames: ['username', 'companyName']
})(SimpleFormWithHocUI);
