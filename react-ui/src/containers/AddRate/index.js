import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

class AddRate extends Component {
  state = {
    dateTime: Date.now(),
    rate: 65.00,
    value: 0,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { dateTime, rate, value } = this.state;
    const { addRecordAsync, showView } = this.props;
    addRecordAsync({ dateTime, rate, value});
    showView('sales');
  }

  render() {
    const { isLoading } = this.props;
    const { dateTime, rate, value } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Date and time"
          placeholder='input Date and time'
          name='dateTime'
          value={dateTime}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Rate"
          placeholder='Rate'
          name='rate'
          value={rate}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Value"
          placeholder='Value'
          name='value'
          value={value}
          onChange={this.handleChange}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

const mapState = ({ loading }, ownProps) => {
  return {
    // true when the `sales/addAsync` effect is running
    isLoading: loading.effects.sales.addAsync,
  };
};

const mapDispatch = dispatch => ({
  addRecordAsync: (payload) => dispatch.sales.addRecordAsync(payload),
  showView: (payload) => dispatch.uiState.showView(payload),
});

export default connect(mapState, mapDispatch)(AddRate);