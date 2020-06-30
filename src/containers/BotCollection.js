import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {
  //your code here

  render() {
    const { bots, handleClick, dischargeBot } = this.props
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={handleClick} dischargeBot={dischargeBot} />)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
