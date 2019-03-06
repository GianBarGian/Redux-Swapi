import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { CharacterList } from "../components";
import { fetch } from '../actions/index';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.loading) {
      return (
        <div>Loading ...</div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
    loading : state.loading,
    error: state.error,
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetch,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListView);