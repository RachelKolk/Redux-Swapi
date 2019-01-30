import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getStarwars} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getStarwars();
  }

  render() {
    
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>
        <h2>Loading...</h2>
      </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

export default connect(
  mapStateToProps,
  {getStarwars}
)(CharacterListView);
