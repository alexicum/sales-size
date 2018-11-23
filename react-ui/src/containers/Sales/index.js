import React from 'react';
// import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import RecordsList from './RecordsList';

const Sales = ({ records, isLoading }) => (
  <div>
    <h1>Sales</h1>
    <RecordsList records={records} />
  </div>
);

const SalesWithData = lifecycle({
  componentDidMount() {
    this.props.getRecordsAsync();
  }
})(Sales);

const mapState = ({ sales, loading }, ownProps) => {
  return {
    records: sales,
    // true when the `sales/getRecordsAsync` effect is running
    isLoading: loading.effects.sales.getRecordsAsync,
  };
};

const mapDispatch = dispatch => ({
  getRecordsAsync: () => dispatch.sales.getRecordsAsync(),
  addRecordAsync: (payload) => dispatch.sales.addRecordAsync(payload),
  // changePage: () => dispatch.router.push('/about-us'),
});

export default connect(mapState, mapDispatch)(SalesWithData);