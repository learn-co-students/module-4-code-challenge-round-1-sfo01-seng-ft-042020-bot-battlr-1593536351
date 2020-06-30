import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here
  displayBots = () => {
    return this.props.bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        handleClick={this.props.toggleSpec}
        handleDischarge={this.props.handleDischarge}
      />
    ));
  };
  render() {
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
