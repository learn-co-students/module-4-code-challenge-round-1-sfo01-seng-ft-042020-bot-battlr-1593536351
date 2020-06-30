import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "http://localhost:6001/bots";
class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      army: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((obj) => {
        return this.setState({
          bots: obj,
        });
      });
  }
  addToArmy = (bot) => {
    // only add if army doesnt already have selected bot
    if (!this.state.army.some((b) => b.id == bot.id)) {
      this.setState({
        army: [...this.state.army, bot],
      });
    }
  };
  removeFromArmy = (bot) => {
    let filteredArmy = this.state.army.filter((b) => b.id !== bot.id);
    return this.setState({
      army: filteredArmy,
    });
  };

  handleDischarge = (bot) => {
    fetch(`${API}/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        this.removeFromArmy(bot);
        let filteredBots = this.state.bots.filter((b) => b.id !== bot.id);
        return this.setState({
          bots: filteredBots,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          removeFromArmy={this.removeFromArmy}
          handleDischarge={this.handleDischarge}
        />
        <BotCollection
          bots={this.state.bots}
          addToArmy={this.addToArmy}
          handleDischarge={this.handleDischarge}
        />
      </div>
    );
  }
}

export default BotsPage;
