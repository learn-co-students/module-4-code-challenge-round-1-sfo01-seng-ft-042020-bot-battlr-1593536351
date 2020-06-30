import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  state = {
      bots: [],
      clickedBots: [],
  }

  // fetch for bots 
  // provided http://localhost:6001 did not work
  componentDidMount() {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((botsData) => this.setState({ bots: botsData}))
  }

  // click in Collection appears in Army
  handleBotClick = (bot) => {
    console.log("BotClick click")
    if (this.state.clickedBots.indexOf(bot) === -1) {
      this.setState({ clickedBots: [...this.state.clickedBots, bot]})
    }
  }

  // unclick disapear from Army
  handleBotUnClick = (bot) => {
    console.log("UnClick click")
    const unclickedBot = this.state.clickedBots.filter((clickedBot) => (
      clickedBot.id !== bot.id
    ))
    this.setState({clickedBots: unclickedBot})
  }

  // delete button
  handleDeleteClick = (bot) => {
    console.log("Delete click")
    fetch(`http://localhost:3000/bots/${bot.id}`, {method: "DELETE"})
    // removed from backend but not frontend
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          clickedBots={this.state.clickedBots} 
          handleBotUnClick={this.handleBotUnClick} 
          handleDeleteClick={this.handleDeleteClick}
        />
        <BotCollection 
          bots={this.state.bots} 
          handleBotClick={this.handleBotClick}
        />
      </div>
    );
  }
}

export default BotsPage;
