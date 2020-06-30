import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
  //your code here
  displayBots = () => {
    return this.props.bots.map((bot) => (
      <BotCard
        bot={bot}
        handleClick={this.props.addToArmy}
        handleDischarge={this.props.handleDischarge}
      />
    ));
  };
  render() {
    console.log(this.props.bots);
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.displayBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
