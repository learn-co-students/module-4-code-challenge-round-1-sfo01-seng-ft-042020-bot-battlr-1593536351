import React, { Component } from "react";
// import BotSpecs from "../components/BotSpecs";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...
  renderArmy = () => {
    return this.props.army.map((bot) => (
      <BotCard
        bot={bot}
        handleClick={this.props.removeFromArmy}
        handleDischarge={this.props.handleDischarge}
      />
    ));
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
