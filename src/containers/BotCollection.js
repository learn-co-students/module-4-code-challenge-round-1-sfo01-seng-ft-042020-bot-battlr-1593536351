import React, { Component } from "react";
import BotSpecs from "../components/BotSpecs";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={this.props.addBotToArmy}
            />
          ))}
          {/* bring back in if I get to advanced deliverables */}
          {/* {this.props.bots.map((bot) => (
            <BotSpecs key={bot.id} bot={bot} /> */}
        </div>
      </div>
    );
  }
}

export default BotCollection;
