import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const required = (value) => {
  return value == null ? 'Required' : undefined;
};
const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email' :
  undefined;
};

class Contact extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  handleSubmit() {
    console.log(this);
  }
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <Field
              name="name"
              component={TextField}
              hintText="Your Name"
              floatingLabelText="Name"
              validate={[required]}
            />
          </div>
          <div>
            <Field
              name="email"
              component={TextField}
              hintText="you@email.com"
              floatingLabelText="Email"
              validate={[required, email]}
            />
          </div>
          <div>
            <Field
              name="message"
              component={TextField}
              hintText="Connect With Us!"
              floatingLabelText="Message"
              validate={[required]}
              multiLine
              rows={2}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'contact',
})(Contact);
