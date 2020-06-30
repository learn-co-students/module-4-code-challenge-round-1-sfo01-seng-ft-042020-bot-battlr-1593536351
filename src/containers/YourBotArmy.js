import React, { Component } from "react";
import BotCard from '../components/BotCard'
class YourBotArmy extends Component {

  render() {
    const { myArmy, handleClick, dischargeBot } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myArmy.map(bot => <BotCard key={bot.id} bot={bot} handleClick={handleClick} dischargeBot={dischargeBot} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
