import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const API = "http://localhost:6001/bots";
class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      army: [],
      viewSpec: false,
      activeBot: null,
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
    if (this.state.viewSpec) {
      this.toggleSpec(bot);
    }
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

  toggleSpec = (bot) => {
    this.setState({
      viewSpec: !this.state.viewSpec,
      activeBot: bot,
    });
  };

  displayBot = () => {
    if (this.state.viewSpec) {
      return (
        <BotSpecs
          toggleSpec={this.toggleSpec}
          addToArmy={this.addToArmy}
          bot={this.state.activeBot}
        />
      );
    } else {
      return (
        <BotCollection
          bots={this.state.bots}
          viewSpec={this.state.viewSpec}
          toggleSpec={this.toggleSpec}
          addToArmy={this.addToArmy}
          handleDischarge={this.handleDischarge}
        />
      );
    }
  };
  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          removeFromArmy={this.removeFromArmy}
          handleDischarge={this.handleDischarge}
        />
        {this.displayBot()}
      </div>
    );
  }
}

export default BotsPage;
