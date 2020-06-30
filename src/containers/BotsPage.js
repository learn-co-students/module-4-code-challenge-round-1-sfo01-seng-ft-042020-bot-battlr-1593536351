import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  state = {
    botsList: [],
    botArmy: [],
  };

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then((resp) => resp.json())
      .then((data) => this.setState({ botsList: data }));
  }

  addBotToArmy = (bot) => {
    // console.log("ADD TO ARMY");
    if (this.state.botArmy.indexOf(bot) === -1) {
      this.setState({ botArmy: [...this.state.botArmy, bot] });
    }
  };

  removeBot = (bot) => {
    const filteredBots = this.state.botArmy.filter((b) => b.id !== bot.id);
    this.setState({ botArmy: filteredBots });
  };

  dischargeBot = (bot) => {
    const filteredBots = this.state.botArmy.filter((b) => b.id !== bot.id);
    this.setState({ botArmy: filteredBots });
    fetch(`http://localhost:6001/bots/${bot.id}`, { method: "DELETE" });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.botArmy}
          removeBot={this.removeBot}
          dischargeBot={this.dischargeBot}
        />
        <BotCollection
          bots={this.state.botsList}
          addBotToArmy={this.addBotToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
