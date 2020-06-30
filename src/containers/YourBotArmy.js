import React, { Component } from "react";

import BotCard from '../components/BotCard'

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot=>
                <BotCard key={bot.id} destroy={this.props.destroy} click={this.props.click} bot={bot} />
            )}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
