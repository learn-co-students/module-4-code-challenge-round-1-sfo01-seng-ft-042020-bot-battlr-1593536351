import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  
  state = {
    currentBotArmy: []
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.clickedBots.map((bot) => (
            <BotCard
            key={bot.id}
            bot={bot}
            addBot={this.props.addBot}
            deleteForver={this.props.deleteForever}

            />

            ))}
          
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
