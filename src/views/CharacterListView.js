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
    this.getStarwars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching,
  error: state.error
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

export default connect(
  mapStateToProps,
  {getStarwars}
)(CharacterListView);
