import React from 'react';
// import { push } from 'connected-react-router';
import { connect } from 'react-redux';
// import lifecycle from 'recompose/lifecycle';
import withHandlers from 'recompose/withHandlers';

const Menu = ({ handleClick }) => (
  <nav className="menu">
    <ul>
      {/*
      <li><a href="/">Exchange rates</a></li>
      <li><a href="/">Add rate</a></li>
      <li><a href="/">Export to CSV</a></li>
      */}
      <li onClick={handleClick} name="sales">Exchange rates</li>
      <li onClick={handleClick} name="addRate">Add rate</li>
      <li onClick={handleClick} name="exportToCSV">Export to CSV</li>
    </ul>
  </nav>
);

const enhancedMenu = withHandlers({
  handleClick: ({ showView }) => (e) => {
    showView(e.target.getAttribute('name'));
  },
})(Menu);


const mapState = ({ uiState }, ownProps) => {
  return {
  };
};

const mapDispatch = dispatch => ({
  showView: (payload) => dispatch.uiState.showView(payload),
});

export default connect(mapState, mapDispatch)(enhancedMenu);