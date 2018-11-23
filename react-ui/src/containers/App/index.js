import React from 'react';
import { Route /* , Link */ } from 'react-router-dom';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import Sales from '../Sales';
import AddRate from '../AddRate';
import Menu from '../Menu';

const App = ({ curView, showMenu, handleClick }) => (
  <div>
    <header>
      <button onClick={handleClick}>Menu</button>
    {/*
      <Link to="/">Sales</Link>
      <Link to="/add-sale">Add sale</Link>
    */}
    </header>
    {!!(showMenu) && <Menu />}
    <main>
      {/* <Route exact path="/" component={Sales} /> */}
      {/* <Route exact path="/add-sale" component={AddSale} /> */}
      <Route exact path="/" />
      {!!(curView === 'sales') && <Sales />}
      {!!(curView === 'addRate') && <AddRate />}
    </main>
  </div>
)

const enhancedApp = withHandlers({
  handleClick: ({ toggleMenu }) => (e) => {
    toggleMenu();
  },
})(App);


const mapState = ({ uiState }, ownProps) => {
  return {
    curView: uiState.curView,
    showMenu: uiState.showMenu,
  };
};

const mapDispatch = dispatch => ({
  showView: (payload) => dispatch.uiState.showView(payload),
  toggleMenu: () => dispatch.uiState.toggleMenu(),
});

export default connect(mapState, mapDispatch)(enhancedApp);